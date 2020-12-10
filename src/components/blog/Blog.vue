<template>
  <div>
    <Nav />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
    Nav,
    Categories,
  },
};
</script>