<template>
  <header
    class="br_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"
    :class="{ 'vue-fixed-header--isFixed': isSticky }"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="header__wrapper mr--0">
            <!-- Header Left -->
            <div class="header-left flex-20">
              <div class="logo">
                <nuxt-link to="/">
                  <img src="/img/logo/brook-white.png" alt="Brook Logo" />
                </nuxt-link>
              </div>
            </div>
            <!-- Mainmenu Wrap -->
            <div class="header-flex-right flex-80">
              <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                <NavigationIdeo />
              </div>

              <div class="header-right">
                <!-- Start Popup Search Wrap -->
                <div class="popup-search-wrap">
                  <button
                    class="btn-search-click"
                    @click="emits('toggleSearch')"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
                <!-- End Popup Search Wrap -->

                <!-- Start Hamberger -->
                <div
                  class="manu-hamber popup-mobile-click d-block d-lg-none black-version d-block d-xl-none"
                  @click="emits('togglenav')"
                >
                  <div>
                    <i></i>
                  </div>
                </div>
                <!-- End Hamberger -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const emits = defineEmits(["togglenav", "toggleSearch"]);

const isSticky = ref(false);

function handleScroll() {
  isSticky.value = window.scrollY >= 200;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.vue-fixed-header--isFixed {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  position: fixed !important;
  background-color: #333;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running
    fadeInDown;
  padding-top: 0;
  .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
    padding: 20px 0;
  }
}
</style>
