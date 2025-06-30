<template>
  <div class="blog-grid blog-standard" :class="addClass">
    <div class="post-thumb">
      <nuxt-link :to="`/project/${blog.slug}`">
        <img class="img-cover-250" :src="useAssetUrl(blog.image)" :alt="blog.title" />
      </nuxt-link>
    </div>
    <div class="post-content text-center">
      <div class="post-inner">
        <div class="post-meta mb--10">
          <div class="post-date">{{ blog.date }}</div>
          <div class="post-category">
            <nuxt-link
              v-for="(category, i) in blog.categories.slice(0, 1)"
              :key="i"
              :to="`/project/category/${useSlugify(category)}`"
              >{{ category }}
            </nuxt-link>
          </div>
        </div>
        <h5 class="heading heading-h5">
          <nuxt-link :to="`/project/${blog.slug}`">
            {{ blog.title }}
          </nuxt-link>
        </h5>
        <nuxt-link class="post-read-more" :to="`/project/${blog.slug}`" v-show="readMoreButton"></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlugify } from "@utility/useSlugify";

const { blog, addClass, readMoreButton } = defineProps({
  blog: {
    type: Object,
    required: true,
  },
  addClass: {
    type: String,
  },
  readMoreButton: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.img-cover-250 {
  height: 250px;
  object-fit: cover;
}
</style>
