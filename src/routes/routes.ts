import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../components/NotFound.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: {name: ""},
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
          },
    ],
});