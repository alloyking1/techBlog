<template>
  <div>
    <section class="py-5 py-md-6 py-lg-7">
      <div class="container pb-3 pt-4 pb-lg-2">
        <div class="row justify-content-center mb-4 pb-2">
          <div class="col-xl-6 col-lg-7 col-md-8">
            <h2 class="h1 mb-4 text-center">
              {{ this.$SiteName }}
              <span class="bg-faded-primary rounded text-primary px-3 py-2"
                >Blog</span
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
            <CategoryCard />
            <!-- <ul
              class="nav nav-tabs cs-media-tabs justify-content-center justify-content-lg-start"
              role="tablist"
            >
              <li class="nav-item mb-3" style="width: 16.5rem">
                <a
                  class="nav-link mr-2 active"
                  href="#account"
                  data-toggle="tab"
                  role="tab"
                >
                  <div class="media align-items-center">
                    <img
                      class="rounded"
                      width="60"
                      src="https://mytalkbox.herokuapp.com/img/podcast.c3bf4a04.png"
                      alt="User Account"
                    />
                    <div class="media-body pl-2 ml-1">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="font-size-sm pr-1">
                          User Account &amp; Dashboard
                        </div>
                        <i class="fe-chevron-right lead ml-2 mr-1"></i>
                      </div>
                    </div></div
                ></a>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCard from "../blog/buildingBlocks/CategoryCard.vue";
export default {
  components: {
    CategoryCard,
  },
};
</script>