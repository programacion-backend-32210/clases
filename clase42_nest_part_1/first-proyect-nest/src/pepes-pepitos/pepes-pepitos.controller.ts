import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PepesPepitosService } from './pepes-pepitos.service';
import { CreatePepesPepitoDto } from './dto/create-pepes-pepito.dto';
import { UpdatePepesPepitoDto } from './dto/update-pepes-pepito.dto';

@Controller('pepes-pepitos')
export class PepesPepitosController {
  constructor(private readonly pepesPepitosService: PepesPepitosService) {}

  @Post()
  create(@Body() createPepesPepitoDto: CreatePepesPepitoDto) {
    return this.pepesPepitosService.create(createPepesPepitoDto);
  }

  @Get()
  findAll() {
    return this.pepesPepitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pepesPepitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePepesPepitoDto: UpdatePepesPepitoDto) {
    return this.pepesPepitosService.update(+id, updatePepesPepitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pepesPepitosService.remove(+id);
  }
}
