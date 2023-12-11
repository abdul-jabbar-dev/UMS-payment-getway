import Axios from 'axios';
import config from '../../../config';
import axios from 'axios';
import ApiError from '../../../errors/apiError';
import httpStatus from 'http-status';
import { CustomerInputData, TransactionData } from '../../../interfaces/ssl';
const initSession = async (payload: CustomerInputData) => {
  try {
    const data: TransactionData = {
      ...payload,
      store_id: config.ssl.sslStoreID,
      store_passwd: config.ssl.sslStorePass,
      currency: 'BDT',
      success_url: 'http://localhost:3030/success',
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn'
    };
    const axiosInstance = await axios({
      method: 'POST',
      data: data,
      baseURL: config.ssl.sslPaymentApi,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    if (axiosInstance?.data?.status === 'SUCCESS') {
      return axiosInstance.data
    }else{
      return axiosInstance.data.failedreason;
    }
  } catch (err) {
    console.log(err);
    new ApiError(httpStatus.BAD_REQUEST, 'Payment failed');
  }
};
const ssl = {
  initSession
};
export default ssl;
