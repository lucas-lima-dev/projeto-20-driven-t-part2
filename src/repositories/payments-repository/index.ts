import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentWithTicketId(): Promise<any> {
  return [];
}

async function createPaymentWithTicketId(): Promise<any> {
  return [];
}

const paymentsRepository = {
  findPaymentWithTicketId,
  createPaymentWithTicketId,
};

export default paymentsRepository;
