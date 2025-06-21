<template>
  <div class="main-container">
    <HeaderTransparentWithSocial @togglenav="navOpen = !navOpen" />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />
    <HeroAuthenticStudio />
    <AboutAuthenticStudio />
    <VideoService />
    <PortfolioTwo
      addClass="pt--130 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80"
    />
    <ServiceIconBoxWithTitleStyleTwo class="pt-0 pb-0" />
    <TestimonialFive />
    <FooterStyleFour />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import PortfolioTwo from "@/components/sections/PortfolioTwo";
import ServiceIconBoxWithTitleStyleTwo from "@/components/sections/ServiceIconBoxWithTitleStyleTwo";
import TestimonialFive from "@/components/sections/TestimonialFive";

const navOpen = ref(false);

onMounted(() => {
  document.body.classList.add("template-color-20", "template-font-2");
});

onUnmounted(() => {
  document.body.classList.remove("template-color-20", "template-font-2");
});
</script>
