import { RequestHandler } from 'express';
import PaymentService from './payment.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
const getPayment: RequestHandler = async (req, res) => {
  try {
    const result = await PaymentService.initSessionDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    console.log(err);
  }
};

const makePayment = () => {};
const paymentController = {
  getPayment,
  makePayment
};
export default paymentController;
