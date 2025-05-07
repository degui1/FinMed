import { env } from '@/env'
import { PrismaClient } from '@generated'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'development' ? ['info', 'warn', 'error'] : [],
})
