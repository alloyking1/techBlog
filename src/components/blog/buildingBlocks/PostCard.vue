<template>
  <div>
    <!-- Post-->
    <article class="card card-horizontal card-custom card-hover mb-grid-gutter">
      <!-- <div
        class="card-img-top"
        href="blog-single-ns.html"
        style="
          background-image: url(https://tekiii.com/wp-content/uploads/2020/11/7x7p-1024x576.jpg);
        "
      ></div> -->
      <div class="card-body">
        <span class="badge badge-dark">{{ content.slug }}</span>
        <h2
          class="h4 nav-heading mt-2 mb-4"
          v-html="content.title.rendered"
        ></h2>
        <p class="font-size-md" v-html="content.excerpt.rendered"></p>
        <!-- <a class="media meta-link font-size-sm align-items-center pt-3" href="#"
          ><img
            class="rounded-circle"
            width="36"
            src="img/blog/avatar/01.jpg"
            alt="Emma Brown"
          />
          <div class="media-body pl-2 ml-1 mt-n1">
            by<span class="font-weight-semibold ml-1">Emma Brown</span>
          </div></a
        > -->
        <div class="mt-3 text-right text-nowrap">
          <a class="meta-link font-size-xs" href="#">
            <!-- <i class="fe-message-square mr-1"></i> -->
            <img
              class="rounded-circle"
              width="36"
              src="https://tekiii.com/wp-content/uploads/2020/11/7x7p-1024x576.jpg"
              alt="Emma Brown"
            />
            Name</a
          >

          <span class="meta-divider"></span
          ><a class="meta-link font-size-xs" href="#"
            ><i class="fe-calendar mr-1 mt-n1"></i>&nbsp;{{
              content.date | formatDate
            }}</a
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["content"],
  mounted() {
    console.log(this.content);
  },
};
</script>
