import ssl from '../ssl/initPaymentSession';

const initSessionDB = async () => {
  const res = await ssl.initSession({
    total_amount: 100,
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    tran_id: ''
  }); 
  return res;
};
const PaymentService = {
  initSessionDB
};
export default PaymentService;
