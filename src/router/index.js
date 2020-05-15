import Vue from "vue";
import VueRouter from "vue-router";
import Account from "../views/Account.vue";
import Personalize from "../views/Personalize.vue";
import ExternalApplication from "../views/ExternalApplication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Account",
    component: Account
  },
  {
    path: "/Personalize",
    name: "Personalize",
    component: Personalize
  },
  {
    path: "/external-application",
    name: "external-application",
    component: ExternalApplication
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
