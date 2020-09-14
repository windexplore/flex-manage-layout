import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Main.vue"),
      name: 'main',
      children: [
        {
          path: "/",
          component: () => import("@/views/Content.vue"),
          name: 'content',
          children: [
            {
              path: "/",
              component: () => import("@/views/system/all.vue"),
            }
          ]
        },
      ],
    },
  ],
});

export default router;
