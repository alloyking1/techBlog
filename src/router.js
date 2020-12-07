import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name:"home",
      component: () => import('./components/Home.vue'),
    },
    // {
    //   path:"/category",
    //   name:"category",
    //   component:() => import("./components/blog/Blog.vue")
    // },
    {
      path:"/category/post/:id",
      props: true,
      name:"category_post",
      component:() => import("./components/blog/CategoriesPost.vue")
    },
    {
      path:"/blog",
      name:"blog_page",
      component:() => import("./components/blog/Blog.vue")
    },
    {
      path:"/blog_single/:id",
      name:"blog_single",
      props: true,
      component:() => import("./components/blog/BlogSingle.vue")
    },
    {
      path:"/podcast",
      name:"podcast",
      component:() => import("./components/podcast/Podcast.vue")
    }
  ],
});

export default router;
