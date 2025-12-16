import { Job } from '@/types/Job';
import prisma from './prisma';

export default class JobRepository {
  static async getAll(): Promise<Job[]> {
    return await prisma.job.findMany();
  }
}
