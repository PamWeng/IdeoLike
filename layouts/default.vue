<template>
  <div class="main-container">
    <HeaderTransparentWithSocial @togglenav="toggleNav" />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />
    <slot />
    <FooterTwo />
  </div>
</template>
<script setup>
const navOpen = ref(false);
function toggleNav() {
  navOpen.value = !navOpen.value;
  console.log(navOpen.value);
}
</script>
