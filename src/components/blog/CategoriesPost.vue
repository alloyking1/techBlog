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
    try {
      axios
        .get(`https://tekiii.com/wp-json/wp/v2/posts?categories=${this.id}`)
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
