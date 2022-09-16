import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserAccessDto } from './dto/create-user-access.dto';
import { UpdateUserAccessDto } from './dto/update-user-access.dto';
import { UserAccessRepository } from './repository/user-access.repository';
import * as validator from 'email-validator';
import e from 'express';
import { UserAccessEntity } from './entities/user-access.entity';

@Injectable()
export class UserAccessService {
  constructor(private readonly repository: UserAccessRepository) {}

  async create(data: CreateUserAccessDto) {
    const saved = await this.repository.save(data);
    return { data: saved };
  }

  async findAll() {
    const where: any = {};
    const data = await this.repository.find({
      where,
      order: {
        created_at: 'DESC',
      },
    });

    const total = await this.repository.count({
      where,
    });

    return {
      data,
      total,
    };
  }

  async findOne(id: number) {
    const item = await this.findOneById(id);
    return { data: item };
  }

  async update(id: number, data: UpdateUserAccessDto) {
    await this.findOneById(id);
    const saved = await this.repository.save({ id, ...data });
    return { data: saved };
  }

  async remove(id: number) {
    await this.findOneById(id);
    const deleted = await this.repository.softDelete(id);
    return { data: { success: deleted.affected > 0 } };
  }

  async findOneById(id: number) {
    const item = await this.repository.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`User access not found`);
    return item;
  }

  async findOneByUnique(identity: string) {
    const isEmail = validator.validate(identity);
    const where: any = {};
    if (isEmail) {
      where.email = identity;
    } else {
      where.username = identity;
    }

    const item = await this.repository.findOne({ where });
    if (!item) throw new NotFoundException('User access not found');
    return item;
  }

  isActive(data: UserAccessEntity): void {
    if (!data.status)
      throw new BadRequestException('User access is not active');
  }
}
