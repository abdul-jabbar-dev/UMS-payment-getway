export type CustomerInputData = {
  total_amount: number;
  tran_id: string;
  product_name: string;
  product_category: string;
  product_profile: string;
  cus_name: string;
  cus_email: string;
  cus_add1: string;
  cus_add2: string;
  cus_city: string;
  cus_state: string;
  cus_postcode: string;
  cus_country: string;
  cus_phone: string;
};
export type TransactionData = {
  store_id: string;
  store_passwd: string;
  currency: string;
  success_url: string;
  fail_url: string;
  cancel_url: string;
  ipn_url: string;
} & CustomerInputData;
