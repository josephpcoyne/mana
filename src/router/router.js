import Vue from "vue";
import Router from "vue-router";

import CalendarRoutes from "./calendar";
import ChatRoutes from "./chat";
import CloudRoutes from "./cloud";
import EmailRoutes from "./email";
import GamesRoutes from "./games";
import HomeRoutes from "./home";
import SchedulerRoutes from "./scheduler";
import SettingsRoutes from "./settings";
import TodoRoutes from "./todo";

Vue.use(Router);

export default new Router({
  mode: "history",
  // linkActiveClass: "selected",
  // linkExactActiveClass: "selected",
  routes: [
    CalendarRoutes,
    ChatRoutes,
    CloudRoutes,
    EmailRoutes,
    GamesRoutes,
    HomeRoutes,
    SchedulerRoutes,
    SettingsRoutes,
    TodoRoutes
  ]
});
