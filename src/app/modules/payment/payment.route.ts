import { Router } from 'express';
import paymentController from './payment.control';

const paymentRoute = Router();
paymentRoute.get('/', paymentController.getPayment);
paymentRoute.post('/', paymentController.makePayment);
export default paymentRoute;
