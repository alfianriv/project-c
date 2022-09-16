import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuModuleService } from './menu-module.service';
import { CreateMenuModuleDto } from './dto/create-menu-module.dto';
import { UpdateMenuModuleDto } from './dto/update-menu-module.dto';

@Controller()
export class MenuModuleController {
  constructor(private readonly menuModuleService: MenuModuleService) {}

  @Post()
  create(@Body() createMenuModuleDto: CreateMenuModuleDto) {
    return this.menuModuleService.create(createMenuModuleDto);
  }

  @Get()
  findAll() {
    return this.menuModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuModuleDto: UpdateMenuModuleDto) {
    return this.menuModuleService.update(+id, updateMenuModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuModuleService.remove(+id);
  }
}
