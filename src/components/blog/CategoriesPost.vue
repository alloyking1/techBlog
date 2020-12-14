<template>
  <div>
    <Nav />
    <Content :posts="post" />
    <Footer />
  </div>
</template>
<script>
// import blogStore from "../../blogStore";
import axios from "axios";
import Content from "./Content.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  props: ["id"],
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    const pages = 1;
    try {
      axios
        .get(
          // `${process.env.VUE_APP_BASE_URL}/wp-json/wp/v2/posts?categories=${this.id}`
          `${process.env.VUE_APP_BASE_URL}/api/get_category_posts/?category_id=${this.id}&count=6&page=${pages}`
        )
        .then((res) => {
          this.post = res.data;
        });
    } catch {
      console.log("there was an error");
    }
  },
  components: {
    Footer,
    Nav,
    Content,
  },
};
</script>
