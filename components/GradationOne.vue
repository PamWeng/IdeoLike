<template>
  <div class="bk-gradation mt--30 mt_sm--5">
    <div
      class="item-grid mt--40 move-up-x wow"
      data-wow-delay=".13s"
      v-for="(box, i) in timeLineData"
      :key="box.id"
    >
      <div class="line"></div>
      <div class="dot-wrap">
        <div class="dot">
          <div class="count">{{ box.year }}</div>
        </div>
      </div>
      <div class="content">
        <h5 class="heading heading-h5">{{ box.heading }}</h5>
        <ul>
          <li v-for="contentItem in box.content">{{ contentItem }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { timeLineData } from "@data/timeLine.json";
</script>
<style lang="scss">
ul {
  list-style-type: none;
}
</style>
