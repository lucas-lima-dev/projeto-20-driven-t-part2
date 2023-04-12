import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getPaymentInfoFromTicketId, postCreatePaymentFromTicketId } from '@/controllers';

const paymentsRouter = Router();

paymentsRouter
  .all('/*', authenticateToken)
  .get('/payments?ticketId=1', getPaymentInfoFromTicketId)
  .post('payments/process', postCreatePaymentFromTicketId);

export { paymentsRouter };
