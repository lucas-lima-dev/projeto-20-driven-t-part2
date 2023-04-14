import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getPaymentInfoFromTicketId, postCreatePaymentFromTicketId } from '@/controllers';

const paymentsRouter = Router();

paymentsRouter
  .all('/*', authenticateToken)
  .get('/', getPaymentInfoFromTicketId)
  .post('/process', postCreatePaymentFromTicketId);

export { paymentsRouter };
