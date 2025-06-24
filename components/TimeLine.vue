<template>
  <div
    class="brook-gradation-area pb--150 ptb-md--80 ptb-sm--60 basic-thine-line bg_color--5"
  >
    <div class="container">
      <div class="ptb--50">
        <h6 class="heading heading-h6 theme-color font-blod font-17">
          Timeline
        </h6>
        <div class="bkseparator--20"></div>
        <h2 class="heading heading-font">好想工作室歷史沿革</h2>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <GradationOne />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  timeLineData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
ul {
  margin-bottom: 0;
  padding-left: 24px;
}
</style>
