import { PrismaClient } from '@prisma/client';

export default async (prisma: PrismaClient) => {
  // Create Root role

  const rootRole = await prisma.role.create({
    data: {
      enName: 'Root',
      arName: 'Root',
      student: 'crud',
      attachment: 'crud',
      book: 'crud',
      category: 'crud',
      department: 'crud',
      favorite: 'crud',
      history: 'crud',
      role: 'crud',
      university: 'crud',
    },
  });

  // create the Root user
  const rootUser = await prisma.user.create({
    data: {
      phoneNumber: '7828477048',
      username: process.env.ROOT_USERNAME,
      isRoot: true,
      role: {
        connect: { id: rootRole.id },
      },
    },
  });

  await prisma.role.update({
    where: { id: rootRole.id },
    data: { userId: rootUser.id },
  });

  const studentRole = await prisma.role.create({
    data: {
      enName: 'Student',
      arName: 'Student',
      student: 'ru',
      attachment: 'crud',
      book: 'crud',
      category: 'r',
      department: 'r',
      favorite: 'crud',
      history: 'crud',
      role: 'r',
      university: '',
      userId: rootUser.id,
    },
  });

  const universityRole = await prisma.role.create({
    data: {
      enName: 'University',
      arName: 'جامعة',
      student: 'r',
      department: 'crud',
      attachment: 'crud',
      book: '',
      category: '',
      favorite: 'crud',
      history: 'crud',
      role: '',
      university: 'ru',
      userId: rootUser.id,
    },
  });

  const departmentRole = await prisma.role.create({
    data: {
      enName: 'Department',
      arName: 'قسم',
      student: 'crud',
      attachment: 'crud',
      book: 'crud',
      category: 'crud',
      department: 'crud',
      favorite: 'crud',
      history: 'crud',
      role: '',
      university: '',
      userId: rootUser.id,
    },
  });

  // Create University
  const universityUser = await prisma.user.create({
    data: {
      username: 'UOT',
      role: {
        connect: { id: universityRole.id },
      },
      arCommName: 'الجامعه التكنولوجيا',
      enCommName: 'University of technology',
      phoneNumber: '7828477047',
    },
  });

  const departmentUser = await prisma.user.create({
    data: {
      username: 'CS',
      role: { connect: { id: departmentRole.id } },
      arCommName: 'علوم الحاسوب',
      enCommName: 'Computer science',
      phoneNumber: '7828477046',
      university: { connect: { id: universityUser.id } },
    },
  });

  return { rootUser, universityUser, departmentUser };
};
