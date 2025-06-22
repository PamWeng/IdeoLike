<template>
  <div class="brook-hero-number-slider-area position-relative">
    <div class="brook-element-carousel number-dot">
      <swiper
        :speed="1000"
        :loop="false"
        :pagination="swiperOptions.pagination"
        :effect="'fade'"
      >
        <swiper-slide v-for="slide in props.bannerData" :key="slide.id">
          <div
            class="hero-item bg-image"
            :style="{ backgroundImage: `url(${useAssetUrl(slide.bgImage)})` }"
          >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="hero-content-2 center">
                    <h6>{{ slide.subHeading }}</h6>
                    <h3>{{ slide.heading }}</h3>
                    <nuxt-link
                      to="/about-us-01"
                      class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between"
                      >Explore Now</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, EffectFade } from "swiper/core";

SwiperCore.use([Pagination, EffectFade]);

const props = defineProps({
  bannerData: {
    type: Array,
    default: () => [],
  },
});

const swiperOptions = reactive({
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className}">${index + 1}</span>`,
  },
});
</script>
