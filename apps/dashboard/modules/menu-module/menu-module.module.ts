import { Module } from '@nestjs/common';
import { MenuModuleService } from './menu-module.service';
import { MenuModuleController } from './menu-module.controller';

@Module({
  controllers: [MenuModuleController],
  providers: [MenuModuleService]
})
export class MenuModuleModule {}
