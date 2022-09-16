import { Test, TestingModule } from '@nestjs/testing';
import { MenuModuleService } from './menu-module.service';

describe('MenuModuleService', () => {
  let service: MenuModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuModuleService],
    }).compile();

    service = module.get<MenuModuleService>(MenuModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
