import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore("postsStore", () => {
  const list = ref([]);

  function setPosts(data) {
    list.value = data;
  }

  function getPosts() {
    return list.value.map((post) => ({
      id: post.id,
      date: post.date,
      slug: post.slug,
      title: post.title.rendered,
      content: post.content.rendered,
    }));
  }
  return { list, setPosts, getPosts };
});
