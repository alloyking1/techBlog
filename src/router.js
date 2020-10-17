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
    {
      path:"/blog",
      name:"blog_page",
      component:() => import("./components/blog/Blog.vue")
    }
  ],
});

export default router;
