import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { UserAccessModule } from './modules/user-access/user-access.module';

@Module({
  imports: [DatabaseModule, UserAccessModule],
  controllers: [AppController],
})
export class AppModule {}
