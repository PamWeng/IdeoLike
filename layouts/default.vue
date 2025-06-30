<template>
  <div class="main-container">
    <IdeoHeaderTransparent
      @togglenav="navOpen = !navOpen"
      @toggleSearch="searchOpen = !searchOpen"
    />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />
    <SearchPopup
      :class="{ 'search-popup-open': searchOpen }"
      @toggleSearch="searchOpen = !searchOpen"
    />
    <slot></slot>
    <FooterTwo />
  </div>
</template>
<script setup>
const navOpen = ref(false);
const searchOpen = ref(false);
</script>
