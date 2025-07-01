<template>
  <div>
    <div class="page-content pt--70 pt_md--80 pt_sm--60 bg_color--5">
      <div class="home-blog-grid-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="brook-section-title">
                <h3 class="heading heading-h3">Nomad Community</h3>
              </div>
            </div>
          </div>

          <div class="row g-0 mt--30">
            <div
              class="col-6 col-md-4 move-up wow blog_box"
              v-for="blog in data.blogs.slice(3, 9)"
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
        </div>
        <ReadMore service-theme-color="#99e5e8" />
        <IdeoIntro :data="nomadsCommunityData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import data from "../data/blog.json";
import { nomadsCommunityData } from "@data/serviceIntro.json";

// 狀態
const navOpen = ref(false);
const searchOpen = ref(false);

// 套用/移除樣式
onMounted(() => {
  document.body.classList.add("template-color-7", "template-font-1");
});
onUnmounted(() => {
  document.body.classList.remove("template-color-7", "template-font-1");
});

definePageMeta({
  layout: "services",
});
</script>

<style lang="scss" scoped>
.container {
  @media #{$sm-layout} {
    max-width: 100%;
  }
}
.blog_box {
  border-left: 1px solid #bcbcbcbc;
  @media #{$sm-layout} {
    &:nth-child(2n) {
      border-right: 1px solid #bcbcbcbc;
    }
  }
  @media (min-width: 768px) {
    &:nth-child(3n) {
      border-right: 1px solid #bcbcbcbc;
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
