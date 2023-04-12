import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketsByUser, getAllTickets, postCreateNewTicket } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/tickets', getTicketsByUser)
  .get('/tickets/types', getAllTickets)
  .post('/tickets', postCreateNewTicket);

export { ticketsRouter };
