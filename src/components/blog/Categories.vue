<template>
  <div class="container pt-5 pb-5">
    <div class="container-custom">
      <div class="row">
        <div class="col-md-6 p-3" v-for="(category, i) in categories" key="i">
          <div class="card p-2">
            <router-link to="/category/post" class="nav-link dropdown-toggle">
              <h1>{{ category.name }}</h1>
              <hr />
              <p>{{ category.description }}</p>
            </router-link>
          </div>
          <br />
        </div>

        <!-- <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import blogStore from "../../blogStore";
import axios from "axios";

export default {
  data() {
    return {
      categories: {},
    };
  },
  created() {
    axios.get("https://tekiii.com/wp-json/wp/v2/categories").then((res) => {
      this.categories = res.data;
      console.log(res.data);
    });
  },
};
</script>

<style scoped>
.container-custom {
  padding-top: 9rem !important;
  padding-bottom: 9rem !important;
}
</style>