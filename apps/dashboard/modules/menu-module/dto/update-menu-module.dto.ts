import { PartialType } from '@nestjs/swagger';
import { CreateMenuModuleDto } from './create-menu-module.dto';

export class UpdateMenuModuleDto extends PartialType(CreateMenuModuleDto) {}
