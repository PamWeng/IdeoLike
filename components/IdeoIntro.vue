<template>
  <div>
    <div
      class="brook-call-to-action bg_image--9"
      :style="{
        backgroundImage: `url(${useAssetUrl(props.data.bgImage)})`,
      }"
    >
      <div class="bg_color--14 text_area">
        <div class="call-content text-sm-start">
          <h2 class="heading heading-h2 wow move-up">
            {{ props.data.title }}
          </h2>
          <h4 class="heading heading-h4 wow move-up">
            {{ props.data.subTitle }}
          </h4>
          <p v-for="p in props.data.content">
            {{ p }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      bgImage: "",
      title: "",
      subTitle: "",
      content: [],
    }),
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/default/variables" as *;
.brook-call-to-action {
  min-height: 150vh;
}
.text_area {
  // background-color: $color-10;
  opacity: 0.85;
  // height: 100vh;
  .call-content {
    padding: 120px 150px;
    @media #{$sm-layout} {
      padding: 120px 50px;
    }
  }
  .heading {
    &-h2 {
      margin-bottom: 30px;
    }
    &-h4 {
      margin-bottom: 50px;
    }
  }
  p {
    font-weight: 600;
    font-size: 20px;
    @media #{$sm-layout} {
      font-size: 16px;
    }
    + p {
      margin-top: 20px;
    }
  }
}
</style>
