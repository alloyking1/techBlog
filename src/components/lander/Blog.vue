<template>
  <div>
    <section class="py-5 py-md-6 py-lg-7">
      <div class="container pb-3 pt-4 pb-lg-2">
        <div class="row justify-content-center mb-4 pb-2">
          <div class="col-xl-6 col-lg-7 col-md-8">
            <h2 class="h1 mb-4 text-center">
              Blog
              <span class="bg-faded-primary rounded text-primary px-3 py-2"
                >Recent Posts</span
              >
            </h2>
            <p class="text-muted text-center">
              We have a technology blog with a unique interest in gaming related
              topics.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <!-- <CategoryCard /> -->
            <RecentPostCard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import CategoryCard from "../blog/buildingBlocks/CategoryCard.vue";
import RecentPostCard from "../blog/RecentPost.vue";
export default {
  components: {
    // CategoryCard,
    RecentPostCard,
  },
};
</script>