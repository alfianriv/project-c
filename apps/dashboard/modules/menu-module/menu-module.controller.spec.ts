import { Test, TestingModule } from '@nestjs/testing';
import { MenuModuleController } from './menu-module.controller';
import { MenuModuleService } from './menu-module.service';

describe('MenuModuleController', () => {
  let controller: MenuModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuModuleController],
      providers: [MenuModuleService],
    }).compile();

    controller = module.get<MenuModuleController>(MenuModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
