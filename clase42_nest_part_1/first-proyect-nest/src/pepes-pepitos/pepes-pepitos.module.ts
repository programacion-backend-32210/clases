import { Module } from '@nestjs/common';
import { PepesPepitosService } from './pepes-pepitos.service';
import { PepesPepitosController } from './pepes-pepitos.controller';

@Module({
  controllers: [PepesPepitosController],
  providers: [PepesPepitosService]
})
export class PepesPepitosModule {}
