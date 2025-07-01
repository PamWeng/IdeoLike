<template>
  <div
    class="view-more-btn heding-color heading-font font-18 font-700 wow move-up"
    :style="{ '--service-theme-color': props.serviceThemeColor }"
  >
    <span>Read more</span>
    <span class="btn-arrow"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  serviceThemeColor: {
    type: String,
    default: "#FFE33E",
  },
});
</script>

<style lang="scss" scoped>
.view-more-btn {
  background-color: #e9e9e9;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  cursor: pointer;

  margin: 30px 0 0 0;

  &:hover {
    background-color: var(--service-theme-color);
  }
  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.btn-arrow {
      transition: all 0.5s !important;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      width: 73px;
      height: 2px;
      background: currentColor;
      margin-left: 14px;
      color: var(--service-theme-color);
      font-size: 14px;
      font-family: $body-font;

      &::before {
        content: "";
        position: absolute;
        right: 1px;
        width: 15px;
        height: 15px;
        border: 2px solid currentColor;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(45deg);
        top: -6px;
      }
    }
  }

  &:hover {
    span {
      &.btn-arrow {
        transform: translateX(100%);
        color: #fff;
      }
    }
  }
}
</style>
