import { PartialType } from '@nestjs/mapped-types';
import { CreatePepesPepitoDto } from './create-pepes-pepito.dto';

export class UpdatePepesPepitoDto extends PartialType(CreatePepesPepitoDto) {}
