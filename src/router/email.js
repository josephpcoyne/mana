import Email from "../views/Email.vue";
import Inbox from "../views/email/Inbox.vue";
import Starred from "../views/email/Starred.vue";

export default {
  path: "/email",
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
};
