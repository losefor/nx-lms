import { PrismaClient } from '@prisma/client';

export default async (prisma: PrismaClient) => {
  await prisma.category.create({
    data: {
      arName: 'الذكاء الاصطناعي',
      enName: 'Artificial intelligence',
      children: {
        create: [
          {
            arName: 'الرياضيات',
            enName: 'Math',
          },
          {
            arName: 'التفاضل',
            enName: 'Derivative',
          },
          {
            arName: 'التكامل',
            enName: 'Calculus',
          },
        ],
      },
    },
  });
};
