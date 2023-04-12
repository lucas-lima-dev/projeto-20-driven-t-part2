import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';

export async function getTicketsByUser(req: AuthenticatedRequest, res: Response): Promise<any> {
  const { userId } = req;
  return [];
}

export async function getAllTickets(req: AuthenticatedRequest, res: Response): Promise<any> {
  return [];
}

export async function postCreateNewTicket(req: AuthenticatedRequest, res: Response): Promise<any> {
  return [];
}
