<template>
  <div>
    <Nav />
    <!-- Page content-->
    <div
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
    >
      <div class="container">
        <div class="row justify-content-center">
          <!-- Content-->
          <div class="col-lg-9 cs-content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div class="pb-4" style="max-width: 38rem">
              <nav aria-label="breadcrumb">
                <ol class="py-1 my-2 breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Blog</a></li>
                  <li class="breadcrumb-item"><a href="#">Category</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Single post right sidebar
                  </li>
                </ol>
              </nav>
              <h1 v-html="post.title.rendered"></h1>
            </div>

            <!-- Post content-->
            <div v-html="post.content.rendered"></div>

            <!-- Tags + Sharing-->
            <div
              class="row no-gutters position-relative align-items-center border-top border-bottom my-5"
            >
              <div
                class="col-md-6 py-2 py-dm-3 pr-md-3 text-center text-md-left"
              >
                <a class="cs-tag mr-2 my-2" href="#">#ui design</a
                ><a class="cs-tag mr-2 my-2" href="#">#workshop</a
                ><a class="cs-tag mr-2 my-2" href="#">#business</a>
              </div>
              <div
                class="d-none d-md-block position-absolute border-left h-100"
                style="top: 0; left: 50%; width: 1px"
              ></div>
              <div class="col-md-6 pl-md-3 py-2 py-md-3">
                <div
                  class="d-flex align-items-center justify-content-center justify-content-md-end"
                >
                  <h6 class="text-nowrap my-2 mr-3">Share post:</h6>
                  <a
                    class="social-btn sb-outline sb-facebook ml-2 my-2"
                    href="#"
                    ><i class="fe-facebook"></i></a
                  ><a
                    class="social-btn sb-outline sb-twitter ml-2 my-2"
                    href="#"
                    ><i class="fe-twitter"></i></a
                  ><a class="social-btn sb-outline sb-google ml-2 my-2" href="#"
                    ><i class="fe-google"></i></a
                  ><a class="social-btn sb-outline sb-email ml-2 my-2" href="#"
                    ><i class="fe-mail"></i
                  ></a>
                </div>
              </div>
            </div>
            <hr />
            <!-- comment -->
            <Comment :content_id="id" :absolute_url="post.link" />
          </div>

          <!-- Sidebar-->
          <!-- <Sidebar /> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from "./SideBar.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
import Comment from "./Comment.vue";
import axios from "axios";
export default {
  props: ["id"],
  components: {
    Sidebar,
    Nav,
    Footer,
    Comment,
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    try {
      axios
        .get(`https://tekiii.com/wp-json/wp/v2/posts/${this.id}`)
        .then((res) => {
          this.post = res.data;
          console.log(this.post);
        });
    } catch {
      console.log("there was an error");
    }
  },
};
</script>