import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Email from "./views/Email.vue";
import Games from "./views/Games.vue";
import Todo from "./views/Todo.vue";
import Calendar from "./views/Calendar.vue";
import Scheduler from "./views/Scheduler.vue";
import Cloud from "./views/Cloud.vue";
import Chat from "./views/Chat.vue";
import Settings from "./views/Settings.vue";
import Inbox from "./views/email/Inbox.vue";
import Starred from "./views/email/Starred.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "selected",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/email",
      // name: "email",
      component: Email,
      children: [
        {
          path: "inbox",
          alias: "/inbox",
          name: "Inbox",
          component: Inbox
        },
        {
          path: "starred",
          alias: "/starred",
          name: "starred",
          component: Starred
        }
      ]
    },
    {
      path: "/games",
      name: "games",
      component: Games
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/scheduler",
      name: "scheduler",
      component: Scheduler
    },
    {
      path: "/cloud",
      name: "cloud",
      component: Cloud
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
