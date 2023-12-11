import express, { Router } from 'express';
import paymentRoute from '../modules/payment/payment.route';

const router = express.Router();

const moduleRoutes: {
  path: string;
  routes: Router;
}[] = [
  {
    path: '/payment',
    routes: paymentRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
