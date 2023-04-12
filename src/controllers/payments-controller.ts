import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';

export async function getPaymentInfoFromTicketId(req: AuthenticatedRequest, res: Response): Promise<any> {
  return [];
}

export async function postCreatePaymentFromTicketId(req: AuthenticatedRequest, res: Response): Promise<any> {
  return [];
}
