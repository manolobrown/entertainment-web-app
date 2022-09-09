import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import TvSeries from "../views/TvSeries.vue";
import BookMarked from "../views/BookMarked.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movie",
      component: Movies,
      props: { placeHolder: "Search for Movies" },
    },
    {
      path: "/tv-series",
      name: "tv",
      component: TvSeries,
    },
    {
      path: "/bookmarked",
      name: "bookmarked",
      component: BookMarked,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "signup",
      component: SignUp,
    },
  ],
});

export default router;
