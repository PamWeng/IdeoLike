<template>
  <div>
    <!-- <pre>資料：{{ postsStore.getPost().content }}</pre> -->
    <!-- <div v-html="postsStore.getPost().content"></div> -->
    <div class="breadcrumb-area bg_color--5 breadcrumb-title-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-center ptb--30">
              <h6 class="heading heading-h6 theme-color font-blod">
                創意實驗室
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bg_color--5">
      <div class="controls messonry-button text-center w-100">
        <button data-filter="all">
          <span class="filter-text">All</span>
          <span class="filter-counter">9</span>
        </button>
        <button data-filter=".creative">
          <span class="filter-text">Training Camp</span>
          <span class="filter-counter">3</span>
        </button>
        <button data-filter=".design">
          <span class="filter-text">未來餐食</span>
          <span class="filter-counter">2</span>
        </button>
        <button data-filter=".digital">
          <span class="filter-text">永續學堂</span>
          <span class="filter-counter">2</span>
        </button>
        <button data-filter=".photography">
          <span class="filter-text">小村共育</span>
          <span class="filter-counter">2</span>
        </button>
      </div>
    </div>
    <div class="bk-blog-grid-area pt--70 pt_md--80 pt_sm--60 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-mesonry bk-blog-masonry clearfix">
              <div class="mesonry-list">
                <MasonryWall
                  :items="postsStore.getPosts()"
                  :ssr-columns="3"
                  :column-width="350"
                  :gap="30"
                >
                  <template #default="{ item }">
                    <div class="blog-grid">
                      <div class="post-thumb">
                        <nuxt-link :to="`/blog/${item.slug}`">
                          <!-- <img
                            :src="useAssetUrl(item.image)"
                            :alt="item.title"
                          /> -->
                        </nuxt-link>
                      </div>
                      <div class="post-content bg_color--14">
                        <div class="post-inner">
                          <h5 class="heading heading-h5">
                            <nuxt-link :to="`/blogs/${item.slug}`">{{
                              item.title
                            }}</nuxt-link>
                          </h5>
                          <div class="post-meta">
                            <div class="post-date">{{ item.date }}</div>
                            <!-- <div class="post-category">
                              <nuxt-link
                                v-for="(category, i) in item.categories.slice(
                                  0,
                                  1
                                )"
                                :key="i"
                                :to="`/blog/category/${useSlugify(category)}`"
                                >{{ category }}</nuxt-link
                              >
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </MasonryWall>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReadMore service-theme-color="#f9c926" />
      <IdeoIntro :data="creativeLabData" />
    </div>
  </div>
</template>

<script setup>
// import data from "@data/blog.json";
import { creativeLabData } from "@data/serviceIntro.json";
import { useSlugify } from "@utility/useSlugify";
import MasonryWall from "@yeger/vue-masonry-wall";
import { themeColor } from "~/utility/themeColor";
import { usePostsStore } from "@/store/postsStore";
import { useTagsStore } from "@/store/tagsStore";
import { useCategoriesStore } from "@/store/categoriesStore";

const postsStore = usePostsStore();
const tagsStore = useTagsStore();
const categoriesStore = useCategoriesStore();

const {
  data: posts,
  pending,
  error,
} = await useFetch("http://ideolike.local/wp-json/wp/v2/posts");

const { data: tags } = await useFetch(
  "http://ideolike.local/wp-json/wp/v2/tags"
);

const { data: categories } = await useFetch(
  "http://ideolike.local/wp-json/wp/v2/categories"
);

const { data: post } = await useFetch(
  `http://ideolike.local/wp-json/ideo-like-custom-api/v1/post/17`
);

if (posts.value) {
  postsStore.setPosts(posts.value);
  postsStore.setPost(post.value);
}

const navOpen = ref(false);
const searchOpen = ref(false);

onMounted(() => {
  nextTick(() => {
    document.body.classList.add("template-color-20", "template-font-1");
  });
});
onUnmounted(() => {
  document.body.classList.remove("template-color-20", "template-font-1");
});

definePageMeta({
  layout: "services",
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/default/variables" as *;
.breadcrumb-area.breadcrumb-title-bar .breadcrumb-inner .heading {
  @media #{$sm-layout} {
    font-size: 24px;
  }
}
.messonry-button button span {
  @media #{$sm-layout} {
    padding: 5px 10px;
  }
}
.blog-grid:hover {
  .post-content {
    background-color: #eee2c2;
  }
}
</style>
