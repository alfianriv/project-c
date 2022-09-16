import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller()
export class PermissionController {
  constructor(private readonly PermissionService: PermissionService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.PermissionService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.PermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PermissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.PermissionService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PermissionService.remove(+id);
  }
}
