import type { Router } from "vue-router";

export default function registerRouteGuard(router: Router) {
  /**
   * 全局前置守卫
   */
  router.beforeEach(async (to, from, next) => {
    next();
  });
  /**
   * 全局解析守卫
   */
  //   router.beforeResolve(async (to) => {});

  /**
   * 全局后置守卫
   */
  //   router.afterEach((to, from, failure) => {

  //   });
}
