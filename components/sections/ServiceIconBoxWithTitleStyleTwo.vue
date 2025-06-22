<template>
  <div class="brook-icon-boxes-area">
    <div class="ptb--120 bg_color--15">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title text-center">
              <!-- <h6 class="heading heading-h6 theme-color font-blod">
                REASONS WHY
              </h6> -->
              <div class="bkseparator--40"></div>
              <h3 class="heading heading-h2 heading-font">
                好想工作室｜友愛市場數位創生聚落｜紮根於島嶼，望向海洋的廣闊無垠
              </h3>
              <div class="mt--20" style="font-size: 20px">
                創新 實驗 設計 共享 共創 共好 包容 永續
              </div>
              <div class="mt--20">
                <div class="basic-short-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt--30">
          <div
            class="col-lg-4 col-sm-6 mt--40 wow move-up"
            v-for="service in data.services.slice(0, 3)"
            :key="service.id"
          >
            <IconBoxItemOne
              :service="service"
              addClass="bg-transparant plr--50 plr_lg--20 plr_sm--5 plr_md--20"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data/service.json";

export default {
  components: {
    IconBoxItemOne: () => import("../IconBoxItemOne"),
  },

  data() {
    return {
      data,
    };
  },
};
</script>
