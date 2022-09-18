import { PartialType } from '@nestjs/mapped-types';
import { CoffeeDto } from './coffee.dto';

export class UpdateCoffeeDto extends PartialType(CoffeeDto) {}
