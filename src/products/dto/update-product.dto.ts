import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from 'src/products/dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
