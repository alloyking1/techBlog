<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  @import '/assets/styles/style.css';
</style>