<template>
  <div
    class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5"
  >
    <div class="container">
      <!-- <pre>{{ props.intro }}</pre> -->
      <div class="row">
        <div
          class="col-md-4 col-sm-6 move-up wow mt--30"
          v-for="blog in props.intro"
          :key="blog.id"
        >
          <div class="blog-grid">
            <div class="post-thumb">
              <nuxt-link :to="'/'">
                <img :src="useAssetUrl(blog.image)" :alt="blog.title" />
              </nuxt-link>
            </div>
            <div class="post-content">
              <div class="post-inner">
                <h5 class="heading heading-h5">
                  <nuxt-link :to="'/'">{{ blog.title }}</nuxt-link>
                </h5>
                <div class="post-meta">
                  <div class="post-date">{{ blog.date }}</div>
                  <div class="post-category">
                    <nuxt-link
                      v-for="(category, i) in blog.categories.slice(0, 1)"
                      :key="i"
                      to="/"
                    >
                      {{ category }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div
          class="view-more-btn heding-color heading-font font-18 font-700 theme-color wow move-up"
        >
          <nuxt-link to="/">
            <span>More about us</span>
            <span class="btn-arrow"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  intro: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
.view-more-btn {
  width: fit-content;
  margin: 30px auto;
}
</style>
