<template>
  <div class="main-container">
    <HeaderBlack
      addClass="header-transparent"
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
    <slot />
    <FooterTwo />
  </div>
</template>
<script setup>
const navOpen = ref(false);
const searchOpen = ref(false);
</script>
