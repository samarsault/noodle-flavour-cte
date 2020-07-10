//
// Adapter
//
import NavBarComponent from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";

//
// NavBar
//
export const NavBar = NavBarComponent;
//
// Footer
//
export const Footer = FooterComponent;

//
// Custom pages
//
export const routes = [
  {
    path: "/",
    page: () => import("./index.vue")
  },
  {
    path: "/catalog",
    page: () => import("./catalog.vue"),
    access: ["courses"]
  },
  {
    path: "/faq",
    page: () => import("./faq.vue")
  },
  {
    path: "/course/:course_id",
    page: () => import("./course.vue"),
    access: ["course"]
  }
];
