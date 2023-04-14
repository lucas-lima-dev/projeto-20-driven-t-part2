import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketsByUser, getAllTickets, postCreateNewTicket } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/', getTicketsByUser)
  .get('/types', getAllTickets)
  .post('/', postCreateNewTicket);

export { ticketsRouter };
