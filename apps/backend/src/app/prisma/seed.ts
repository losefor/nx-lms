import { PrismaClient } from '@prisma/client';
import * as data from './data';

const prisma = new PrismaClient();

const main = async () => {
  // Create Users and return the super admin
  const { departmentUser } = await data.users(prisma);

  await data.books(prisma, departmentUser);

  // Create roles
  await data.roles(prisma);

  // Create the subcategories
  await data.categories(prisma);
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
