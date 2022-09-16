import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserAccessService } from './user-access.service';
import { CreateUserAccessDto } from './dto/create-user-access.dto';
import { UpdateUserAccessDto } from './dto/update-user-access.dto';

@Controller('user-access')
export class UserAccessController {
  constructor(private readonly userAccessService: UserAccessService) {}

  @Post()
  create(@Body() data: CreateUserAccessDto) {
    return this.userAccessService.create(data);
  }

  @Get()
  findAll() {
    return this.userAccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAccessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserAccessDto) {
    return this.userAccessService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccessService.remove(+id);
  }
}
