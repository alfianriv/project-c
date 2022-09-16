import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MODULES, RouterApp } from './router';

@Module({
  imports: [...MODULES, RouterModule.register([...RouterApp()])],
})
export class AppModule {}
