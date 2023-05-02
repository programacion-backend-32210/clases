import { Test, TestingModule } from '@nestjs/testing';
import { PepesPepitosService } from './pepes-pepitos.service';

describe('PepesPepitosService', () => {
  let service: PepesPepitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PepesPepitosService],
    }).compile();

    service = module.get<PepesPepitosService>(PepesPepitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
