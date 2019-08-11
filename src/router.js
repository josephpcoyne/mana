import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Email from "./views/Email.vue";
import Todo from "./views/Todo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/email",
      name: "email",
      component: Email
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Todo.vue")
    }
  ]
});
