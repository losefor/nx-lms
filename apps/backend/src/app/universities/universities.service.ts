import { Prisma, User } from '.prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { FindManyUniversityDto } from './dto/find-many-university.dto';
import _ from 'lodash';
import { RolesService } from 'src/roles/roles.service';
@Injectable()
export class UniversitiesService {
  constructor(
    private prisma: PrismaService,
    private roleService: RolesService,
  ) {}

  // reshape the university
  private reshape(universities: any): FindManyUniversityDto[] {
    return universities.map(
      ({
        isRoot,
        updatedAt,
        universityId,
        phoneNumber,
        firstName,
        secondName,
        departmentId,
        ...safeData
      }) => {
        // reshape the role
        const [reshapedRole] = this.roleService.reshape([safeData.role]);
        safeData.role = reshapedRole;

        // return the reshaped data
        return safeData;
      },
    );
  }

  async create(createUniversityDto: CreateUniversityDto) {
    // Get the id of the university role
    const { id } = await this.prisma.role.findFirst({
      where: { enName: 'University' },
    });

    // Create University
    const university = await this.prisma.user.create({
      data: {
        ...createUniversityDto,
        role: { connect: { id } },
      },
      include: { role: true },
    });

    const [reshapedUniversity] = this.reshape([university]);

    return reshapedUniversity;
  }

  async findMany(args?: Prisma.UserFindManyArgs) {
    // const { where, ...rest } = args;
    // Get the id of the university role
    const { id } = await this.prisma.role.findFirst({
      where: { enName: 'University' },
    });

    const universities = await this.prisma.user.findMany({
      where: { role: { id } },
      include: {
        role: true,
      },
    });

    // Make the object safe
    const reshapedUniversities = this.reshape(universities);
    const count = await this.prisma.user.count({ where: { role: { id } } });
    return [reshapedUniversities, count];
  }

  async findUnique(id: string) {
    const university = await this.prisma.user.findUnique({ where: { id } });

    if (!university) {
      throw new BadRequestException('There is no such university');
    }

    // Make the object safe
    const [reshapedUniversity] = this.reshape([university]);

    return reshapedUniversity;
  }

  async update(user: User, updateUniversityDto: UpdateUniversityDto) {
    const university = await this.prisma.user.update({
      where: { id: user.id },
      data: updateUniversityDto,
    });

    // Make the object safe
    const [reshapedUniversity] = this.reshape([university]);

    return reshapedUniversity;
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
