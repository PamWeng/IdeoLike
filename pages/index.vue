<template>
  <div class="main-container">
    <HeaderTransparentWithSocial @togglenav="navOpen = !navOpen" />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />
    <HeroAuthenticStudio :bannerData="bannerData" />
    <ServiceIconBoxWithTitleStyleTwo class="pt-0 pb-0" />
    <!-- creative lab -->
    <VideoService :serviceData="creativeLabData[0]" />
    <ServiceIntro :intro="blogs.slice(0, 3)" />
    <!-- nomads groups -->
    <VideoService :serviceData="nomadsData[0]" />
    <ServiceIntro :intro="blogs.slice(0, 3)" />
    <!-- programming projects -->
    <VideoService :serviceData="projectsData[0]" />
    <ServiceIntro :intro="blogs.slice(0, 3)" />
    <!-- spaces -->
    <div class="container mb--50">
      <div class="breadcrumb-inner ptb--50">
        <h6 class="heading heading-h6 theme-color font-blod mb--20">Spaces</h6>
        <h2 class="heading heading-font">隱身於傳統市場二樓的創意基地</h2>
      </div>
      <div class="gallery-wrapper row clearfix">
        <MasonryWall
          :items="spacesData"
          :ssr-columns="3"
          :column-width="328"
          :gap="30"
        >
          <template #default="{ item }">
            <nuxt-link :to="item.link">
              <div class="masonary-item width-33">
                <div class="gallery">
                  <div class="thumb">
                    <img :src="useAssetUrl(item.image)" alt="Gallery Images" />
                  </div>
                  <div class="hover-overlay yellow-overlay">
                    <div class="inner">
                      <span class="ion ion-android-add"></span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </template>
        </MasonryWall>
      </div>
    </div>

    <MapInfo />
    <FooterTwo />
  </div>
</template>

<script setup>
import { bannerData } from "@data/banner.json";
import { creativeLabData } from "@data/creativeLab.json";
import { nomadsData } from "@data/nomads.json";
import { projectsData } from "@data/projects.json";
import { blogs } from "@data/blog.json";
import { spacesData } from "@data/spaces.json";
// import { timeLineData } from "@/data/timeLine.json";
import { ref, onMounted, onUnmounted } from "vue";

// import PortfolioTwo from "@/components/sections/PortfolioTwo";
import ServiceIconBoxWithTitleStyleTwo from "@/components/sections/ServiceIconBoxWithTitleStyleTwo";
import TestimonialFive from "@/components/sections/TestimonialFive";
import MasonryWall from "@yeger/vue-masonry-wall";

const navOpen = ref(false);

onMounted(() => {
  document.body.classList.add("template-color-20", "template-font-2");
});

onUnmounted(() => {
  document.body.classList.remove("template-color-20", "template-font-2");
});
</script>
