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
    <CategoryCard />
  </div>
</template>

<script>
import CategoryCard from "./buildingBlocks/CategoryCard";

export default {
  components: {
    CategoryCard,
  },
};
</script>

