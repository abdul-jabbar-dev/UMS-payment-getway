import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
    .string()
    .default('3000')
    .refine((val) => Number(val)),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string(),
  JWT_SECRET: z.string(),
  SSL_PAYMENT_API_URL: z.string(),
  SSL_STORE_PASS: z.string(),
  SSL_VALIDATION_URL: z.string(),
  SSL_STORE_ID: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db: {
    url: envVars.DATABASE_URL
  },
  redis: {
    url: envVars.REDIS_URL
  },
  jwt: {
    secret: envVars.JWT_SECRET
  },
  ssl: {
    sslPaymentApi: envVars.SSL_PAYMENT_API_URL,
    sslStorePass:envVars.SSL_STORE_PASS,
    sslValidationUrl:envVars.SSL_VALIDATION_URL,
    sslStoreID:envVars.SSL_STORE_ID,
  }
};
