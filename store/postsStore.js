import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore("postsStore", () => {
  const list = ref([]);
  const one = ref(null);

  function setPosts(data) {
    list.value = data;
  }

  function getPost() {
    return one.value;
    // return {
    //   id: one.value.id,
    // date: one.value.date,
    // slug: one.value.slug,
    // title: one.value.title.rendered,
    // content: one.value.content.rendered,
    // };
  }
  function setPost(data) {
    // console.log("post:", data);
    one.value = data;
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

  return {
    list,
    one,
    setPosts,
    getPosts,
    setPost,
    getPost,
  };
});
