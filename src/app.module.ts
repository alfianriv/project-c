import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { UserAccessModule } from './modules/user-access/user-access.module';
import { RoleModule } from './modules/role/role.module';
import { MenuAccessModule } from './modules/menu-access/menu-access.module';
import { ModuleModule } from './modules/module/module.module';
import { MenuModuleModule } from './modules/menu-module/menu-module.module';
import { AccessTokenModule } from './modules/access-token/access-token.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserAccessModule],
  controllers: [AppController],
})
export class AppModule {}
