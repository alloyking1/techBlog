<template>
  <!-- Page content-->
  <div class="container py-4 mb-2 mb-sm-0 pb-sm-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <nav aria-label="breadcrumb">
          <ol class="py-1 my-2 breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Blog</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              List no sidebar
            </li>
          </ol>
        </nav>
        <h1 class="mb-5">Blog</h1>
        <div v-for="(eachPost, index) in posts" :key="index">
          <router-link
            :to="{ name: 'blog_single', params: { id: eachPost.id } }"
          >
            <!-- Post-->
            <PostCard :content="eachPost" />
          </router-link>
        </div>

        <!-- Pagination-->
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import PostCard from "./buildingBlocks/PostCard.vue";
export default {
  props: ["posts"],
  components: {
    PostCard,
    Pagination,
  },
};
</script>