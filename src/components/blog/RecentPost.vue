<template>
  <div class="container">
    <div v-for="(eachPost, index) in recentPost.posts" :key="index">
      <router-link
        class="noRouterLink"
        :to="{ name: 'blog_single', params: { id: eachPost.id } }"
      >
        <!-- Post-->
        <PostCard :content="eachPost" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "./buildingBlocks/PostCard";
export default {
  data() {
    return {
      recentPost: "",
    };
  },
  mounted() {
    const siteName = process.env.VUE_APP_BASE_URL;
    axios
      .get(`${siteName}/api/get_recent_posts/?count=3&page=1`)
      .then((res) => {
        this.recentPost = res.data;
        console.log(this.recentPost);
      });
  },
  components: {
    PostCard,
  },
};
</script>