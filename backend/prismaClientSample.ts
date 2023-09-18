import { PrismaClient } from '@prisma/client'
import { uuid } from 'uuidv4'

console.log({ dbUrl: process.env })
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const newAdministrator = await prisma.administrator.create({
    data: {
      id: uuid(),
      firstName: 'first',
      lastName: 'last',
    },
  })

  console.log({ newAdministrator })

  const administrators = await prisma.administrator.findMany()
  console.log({ administrators })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
