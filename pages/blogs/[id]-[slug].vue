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

const { data: post, error } = await useFetch(
  `http://ideolike.local/wp-json/ideo-like-custom-api/v1/post/${id}`
);

if (post.value) {
  postsStore.setPost(post.value);
}
if (error.value) {
  console.error("API 呼叫失敗，錯誤:", error.value);
} else if (post.value) {
  postsStore.setPost(post.value);
}

const navOpen = ref(false);
const searchOpen = ref(false);
</script>

<style lang="scss" scoped></style>
