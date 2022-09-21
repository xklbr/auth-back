import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Product, ProductImage } from './entities';
import { User } from 'src/user/entities/user.entity';

import { CreateProductDto, UpdateProductDto } from 'src/products/dto';
import { PaginationDto } from 'src/shared/dtos';

import { MessageHandler } from 'src/shared/enums';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    private readonly dataSource: DataSource,
  ) {}

  private readonly logger = new Logger('ProductsService');

  async create(createProductDto: CreateProductDto, user: User) {
    try {
      const { images = [], ...productDetails } = createProductDto;
      const product = this.productRepository.create({
        ...productDetails,
        images: images.map((image) =>
          this.productImageRepository.create({ url: image }),
        ),
        user: { id: user.id },
      });

      await this.productRepository.save(product);
      return { ...product, images };
    } catch (error) {
      if (error.code === '23505')
        throw new HttpException(
          MessageHandler.PRODUCT_ALREADY_EXIST,
          HttpStatus.BAD_REQUEST,
        );

      this.logger.error(error);
      throw new InternalServerErrorException(MessageHandler.UNEXPECTED_ERROR);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 5 } = paginationDto;
    const product = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true,
      },
    });

    return product.map(({ images, ...rest }) => ({
      ...rest,
      images: images.map((img) => img.url),
    }));
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException(MessageHandler.PRODUCT_NOT_FOUND);

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, user: User) {
    const { images, ...toUpdate } = updateProductDto;
    const product = await this.productRepository.preload({
      id,
      ...toUpdate,
    });

    if (!product) throw new NotFoundException(MessageHandler.PRODUCT_NOT_FOUND);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        await queryRunner.manager.delete(ProductImage, { product: { id } });
        product.images = images.map((image) =>
          this.productImageRepository.create({ url: image }),
        );
      }

      product.user = user;
      await queryRunner.manager.save(product);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return product;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      this.logger.error(error);
      throw new InternalServerErrorException(MessageHandler.UNEXPECTED_ERROR);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }
}
