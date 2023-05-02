import { Test, TestingModule } from '@nestjs/testing';
import { PepesPepitosController } from './pepes-pepitos.controller';
import { PepesPepitosService } from './pepes-pepitos.service';

describe('PepesPepitosController', () => {
  let controller: PepesPepitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PepesPepitosController],
      providers: [PepesPepitosService],
    }).compile();

    controller = module.get<PepesPepitosController>(PepesPepitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
