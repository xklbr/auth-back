import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Product } from 'src/products/entities';
import { ProductsService } from 'src/products/products.service';

import { seedUsersData, seedProductsData } from './data';
import { MessageHandler } from 'src/shared/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly productsService: ProductsService,
  ) {}

  private readonly logger = new Logger('SEED');

  async runSeed() {
    await this.deleteTables();
    const adminUser = await this.insertUsers();

    await this.insertNewProducts(adminUser);
    return 'Seed - Insert executed!';
  }

  private async deleteTables() {
    await this.deleteAllProducts();

    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  private async insertUsers() {
    const seedUsers = seedUsersData.users;

    seedUsers.map((user) => {
      user.password = bcrypt.hashSync(user.password, 10);
      user.email = user.email.toLocaleLowerCase().trim();
      this.userRepository.create(user);
    });

    const dbUsers = await this.userRepository.save(seedUsers);

    return dbUsers[0];
  }

  private async insertNewProducts(user: User) {
    await this.deleteAllProducts();

    const products = seedProductsData.products;

    const insertPromises = [];

    products.forEach((product) =>
      insertPromises.push(this.productsService.create(product, user)),
    );

    await Promise.all(insertPromises);

    return true;
  }

  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(MessageHandler.UNEXPECTED_ERROR);
    }
  }
}
