<template>
  <div>
    <div
      v-if="postsStore.getPost()"
      v-html="postsStore.getPost().content"
    ></div>
    <div v-else>
      <p>載入中</p>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from "@/store/postsStore";

const postsStore = usePostsStore();

const { id, slug } = useRoute().params;

definePageMeta({
  layout: "services",
});

const { data: post, error: postError } = await useFetch(
  `http://ideolike.local/wp-json/ideo-like-custom-api/v1/post/${id}`
);

const { data: assets, error: assetsError } = await useFetch(
  `http://ideolike.local/wp-json/ideo-like-custom-api/v1/post-assets/${id}`
);
if (post.value) {
  postsStore.setPost(post.value);
}
if (postError.value) {
  console.error("API 呼叫失敗，錯誤:", postError.value);
} else if (post.value) {
  postsStore.setPost(post.value);
}

const navOpen = ref(false);
const searchOpen = ref(false);
onMounted(() => {
  nextTick(() => {
    if (assets.value) {
      useExternalAssets(assets.value);
    } else {
      console.error(assetsError.value);
    }
  });
});
</script>

<style lang="scss" scoped>
:deep(.wp-block-details > summary) {
  display: list-item;
}
</style>
