<template>
  <div class="brook-service-area">
    <div class="row row--0 bg_color--14 align-items-center video-with-thumb">
      <div class="col-lg-6">
        <div class="service-thumb authenthic-service">
          <img :src="useAssetUrl(props.serviceData.img)" alt="service image" />
        </div>
      </div>
      <div class="col-lg-6 ptb-md--80 ptb-sm--80">
        <div
          class="service-content authenthic-service plr--130 plr_lg--70 plr_md--30 plr_sm--30"
        >
          <h6
            class="heading heading-h6 theme-color letter-spacing-3 theme-color font-17"
          >
            {{ props.serviceData.heading }}
          </h6>
          <div class="bkseparator--20"></div>
          <h1
            class="heading heading-h1 heading-font line-height-1-5 move-up wow"
          >
            {{ props.serviceData.title }}
          </h1>
        </div>
      </div>
      <div class="video-btn position--center d-none d-lg-block">
        <a href="/" target="_blank">
          <div class="play__btn">
            <div class="video-icon third-icon"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAssetUrl } from "~/composables/useAssetUrl";

const props = defineProps({
  serviceData: {
    type: Object,
    default: () => ({
      img: "",
      heading: "",
      title: "",
    }),
  },
});
</script>
