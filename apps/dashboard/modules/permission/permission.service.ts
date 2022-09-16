import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionService {
  create(createPermissionDto: CreatePermissionDto) {
    return 'This action adds a new Permission';
  }

  findAll() {
    return `This action returns all Permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} Permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} Permission`;
  }
}
