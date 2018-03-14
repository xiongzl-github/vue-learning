import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Home from "@/components/Home/Home";
import Me from "@/components/Me";
import Nearby from "@/components/Nearby";
import Order from "@/components/Order";
import Stroll from "@/components/Stroll";
import Food from "@/components/Food";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name:"default",
          component: Home
        },
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/me",
          name: "me",
          component: Me
        },
        {
          path: "/nearby",
          name: "nearby",
          component: Nearby
        },
        {
          path: "/order",
          name: "order",
          component: Order
        },
        {
          path: "/stroll",
          name: "stroll",
          component: Stroll
        }
      ]
    },
    {
      path: "/food",
      name: "food",
      component: Food
    }
  ],
  mode: "history"
});
