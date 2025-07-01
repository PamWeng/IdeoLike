<template>
  <div>
    <div
      class="breadcrumb-area bg_color--15 breadcrumb-title-bar pt--50 pt_md--40 pt_sm--30"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-center">
              <h6 class="heading heading-h6 theme-color font-blod">
                Our programming projects
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bk-blog-grid-area pt--50 pt_md--40 pt_sm--30 bg_color--15">
      <div class="container">
        <div class="row">
          <div class="controls messonry-button text-center w-100">
            <button data-filter="all">
              <span class="filter-text">All</span>
              <span class="filter-counter">6</span>
            </button>
            <button data-filter=".GDG">
              <span class="filter-text">GDG</span>
              <span class="filter-counter">3</span>
            </button>
            <button data-filter=".Hackathons">
              <span class="filter-text">各種松們</span>
              <span class="filter-counter">2</span>
            </button>
            <button data-filter=".Public-Private">
              <span class="filter-text">公私協力</span>
              <span class="filter-counter">2</span>
            </button>
            <button data-filter=".Traditional-Industries">
              <span class="filter-text">傳統產業</span>
              <span class="filter-counter">2</span>
            </button>
            <button data-filter=".Other-Industries">
              <span class="filter-text">其他產業</span>
              <span class="filter-counter">2</span>
            </button>
          </div>
        </div>
        <div class="row mtn--50">
          <div
            class="col-lg-4 col-sm-6 move-up wow mt--100"
            v-for="blog in data.blogs.slice(26, 32)"
            :key="blog.id"
          >
            <BlogPostFive
              :blog="blog"
              addClass="blog-standard blog-grid--modern"
              readMoreButton="true"
            />
          </div>
        </div>
      </div>
      <ReadMore service-theme-color="#23be8c" />
      <IdeoIntro :data="programmingProjectsData" />

      <!-- <div class="row">
        <div class="col-lg-12">
          <div class="brook-pagination-wrapper text-center pt--80">
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
                <button>3</button>
              </li>
              <li class="page-item">
                <button>Next</button>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import data from "@data/blog.json";
import { programmingProjectsData } from "@data/serviceIntro.json";
import { themeColor } from "~/utility/themeColor";

const navOpen = ref(false);
const searchOpen = ref(false);

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
