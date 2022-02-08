import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dysmenorrhea from "../views/Syndromes/Dysmenorrhea.vue";
import Severeflu from "../views/Syndromes/Severeflu.vue";
import Payment from "../views/Payment.vue";

// import PageNotFound from "../views/PageNotFound.vue";
// import Login from "../views/Login.vue";
// import Logout from "../views/Logout.vue"
// import UserHistory from "../views/UserHistory.vue"
// import UserProfile from "../views/UserProfile.vue"
// import { Auth } from "aws-amplify";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Dysmenorrhea/:Language",
    name: "Dysmenorrhea",
    component: Dysmenorrhea,
  },
  {
    path: "/Severeflu/:Language",
    name: "Severeflu",
    component: Severeflu,
  },
  {
    path: "/Payment/:orderId",
    name: "Payment",
    component: Payment,
  },
  // {
  //   path: "/Login",
  //   name: "Login",
  //   component: Login,
  // },
  // {
  //   path: "/Logout",
  //   name: "Logout",
  //   component: Logout,
  // },
  // {
  //   path: "/UserHistory",
  //   name: "UserHistory",
  //   component: UserHistory,
  // },
  // {
  //   path: "/UserProfile",
  //   name: "UserProfile",
  //   component: UserProfile,
  // },
  // {
  //   name: "PageNotFound",
  //   path: "/:pathMatch(.*)*",
  //   component: PageNotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const isAuthenticated = await Auth.currentUserInfo();
//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
