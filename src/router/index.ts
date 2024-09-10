import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import routes from './routes';
import registerRouteGuard from './Interceptor';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});
// 注册路由守卫
registerRouteGuard(router);

export default router;
