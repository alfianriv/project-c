import { Injectable } from '@nestjs/common';
import { CreateMenuModuleDto } from './dto/create-menu-module.dto';
import { UpdateMenuModuleDto } from './dto/update-menu-module.dto';

@Injectable()
export class MenuModuleService {
  create(createMenuModuleDto: CreateMenuModuleDto) {
    return 'This action adds a new menuModule';
  }

  findAll() {
    return `This action returns all menuModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuModule`;
  }

  update(id: number, updateMenuModuleDto: UpdateMenuModuleDto) {
    return `This action updates a #${id} menuModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuModule`;
  }
}
