<template>
  <div>
    <div
      class="page-content pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5"
    >
      <div class="home-blog-grid-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="brook-section-title">
                <h3 class="heading heading-h3">Nomad Community</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="row g-0 mt--30">
                <div
                  class="col-sm-4 move-up wow"
                  v-for="blog in data.blogs.slice(3, 11)"
                  :key="blog.id"
                >
                  <div class="blog-grid">
                    <div class="post-thumb">
                      <nuxt-link :to="`/blog/${blog.slug}`">
                        <img :src="blog.image" :alt="blog.alt" />
                      </nuxt-link>
                    </div>
                    <div class="post-content">
                      <div class="post-inner">
                        <h5 class="heading heading-h5">
                          <nuxt-link :to="`/blog/${blog.slug}`">{{
                            blog.title
                          }}</nuxt-link>
                        </h5>
                        <div class="post-meta">
                          <div class="post-date">{{ blog.date }}</div>
                          <div class="post-category">
                            <nuxt-link :to="`/blog/${blog.slug}`">{{
                              blog.category
                            }}</nuxt-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-pagination-wrapper text-center pt--80 pt_md--40 pt_sm--40"
                  >
                    <ul class="brook-pagination">
                      <li class="page-item">
                        <button>Prev</button>
                      </li>
                      <li class="page-item active">
                        <button>1</button>
                      </li>
                      <li class="page-item">
                        <button>2</button>
                      </li>
                      <li class="page-item">
                        <button>Next</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import data from "../data/blog.json";

// 狀態
const navOpen = ref(false);
const searchOpen = ref(false);

// 套用/移除樣式
onMounted(() => {
  document.body.classList.add("template-color-10", "template-font-1");
});
onUnmounted(() => {
  document.body.classList.remove("template-color-10", "template-font-1");
});

definePageMeta({
  layout: "services",
});
</script>

<style lang="scss" scoped>
.hero-blog-grid-item {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  // res
  @media #{$sm-layout} {
    height: 400px;
  }
}
.hero-blog-grid-content {
  .post-inner {
    padding-top: 250px;
    @media #{$sm-layout} {
      padding-top: 150px;
    }
    .heading {
      font-size: 36px;
      margin-bottom: 20px;
      // res
      @media #{$md-layout, $sm-layout} {
        font-size: 24px;
      }
      a {
        color: $white;
      }
    }
    .post-meta {
      color: $white;
      .post-date {
        color: $white;
      }
      .post-category {
        a {
          color: $white;
        }
      }
    }
  }
}
.blog-grid {
  transition: box-shadow 0.3s ease;
  .post-content {
    transition: background-color 0.3s ease;
  }

  &:hover {
    transform: none !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    .post-content {
      background-color: $color-7;
    }
  }
}
</style>
