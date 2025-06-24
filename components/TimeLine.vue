<template>
  <div
    class="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 basic-thine-line"
  >
    <div class="container">
      <div class="ptb--50">
        <h6 class="heading heading-h6 theme-color font-blod">Timeline</h6>
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
.timeline {
  position: relative;
  > :nth-child(odd) {
    &::before {
      content: "";
      position: absolute;
      top: 1.5rem;
      left: 30%;
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background: #ccc;
    }
  }
  > :nth-child(even) {
    &::before {
      content: "";
      position: absolute;
      top: 1.5rem;
      right: 30%;
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background: $brown;
    }
  }
}
.timeline-item {
  position: relative;

  + .timeline-item {
    margin-top: 3rem;
  }
}
.timeline-content {
  :hover {
    background-color: #000;
    color: white;
  }
}
ul {
  margin-bottom: 0;
  padding-left: 24px;
}
</style>
