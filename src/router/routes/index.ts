import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/components/layout/index.vue"),
    redirect: "/activity",
    children: [],
  },
];
export default routes;
