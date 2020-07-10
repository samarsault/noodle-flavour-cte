import Vue from "vue";
import VueRouter from "vue-router";
import Container from "./components/Container.vue";
import { routes } from "noodle-flavour";

Vue.use(VueRouter);

//
// CustomContainer acts as awrapper
// with a bit of exposed app functionality
//
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.map(route => ({
    path: route.path,
    component: Container,
    props: { page: route.page, access: route.access }
  }))
});

export default router;
