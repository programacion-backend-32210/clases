import { Injectable } from '@nestjs/common';
import { CreatePepesPepitoDto } from './dto/create-pepes-pepito.dto';
import { UpdatePepesPepitoDto } from './dto/update-pepes-pepito.dto';

@Injectable()
export class PepesPepitosService {
  create(createPepesPepitoDto: CreatePepesPepitoDto) {
    return 'This action adds a new pepesPepito';
  }

  findAll() {
    return `This action returns all pepesPepitos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pepesPepito`;
  }

  update(id: number, updatePepesPepitoDto: UpdatePepesPepitoDto) {
    return `This action updates a #${id} pepesPepito`;
  }

  remove(id: number) {
    return `This action removes a #${id} pepesPepito`;
  }
}
