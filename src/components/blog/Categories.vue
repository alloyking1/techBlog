<template>
  <div class="container pt-5 pb-5">
    <nav aria-label="breadcrumb">
      <ol class="py-1 my-2 breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Blog</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          List no sidebar
        </li>
      </ol>
    </nav>
    <h1 class="mb-5">Categories</h1>
    <hr />
    <br />
    <div class="row">
      <div class="col-md-6 pt-3" v-for="(category, i) in categories">
        <router-link
          class="noRouterLink"
          :to="{ name: 'category_post', params: { id: category.id } }"
        >
          <article
            class="card card-custom card-horizontal card-hover mb-grid-gutter"
          >
            <div class="card-body">
              <h2 class="h4 nav-heading mb-4 pt-3">
                {{ category.name }}
              </h2>
              <!-- <span class="badge badge-pill badge-dark">Dark</span>
              <span class="badge badge-pill badge-primary">Primary</span> -->
              <h5>
                <span class="badge badge-pill badge-dark">{{
                  category.description
                }}</span>
              </h5>
            </div>
          </article>
        </router-link>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
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
    });
  },
};
</script>

