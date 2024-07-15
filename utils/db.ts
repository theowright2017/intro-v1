import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

/**
 *  - cache connection to database
 *  - if serverless, account for multiple connections by only connecting once
 */
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma