import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';

async function findTicketByUserId(): Promise<any> {
  return [];
}

async function findAllTickets(): Promise<any> {
  return [];
}

async function createNewTicket(): Promise<any> {
  return [];
}

const ticketsRepository = {
  findTicketByUserId,
  findAllTickets,
  createNewTicket,
};

export default ticketsRepository;
