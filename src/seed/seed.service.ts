import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Store } from 'src/stores/entities';
import { StoresService } from 'src/stores/stores.service';

import { seedUsersData, seedStoresData } from './data';
import { MessageHandler } from 'src/shared/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly storesService: StoresService,
  ) {}

  private readonly logger = new Logger('SEED');

  async runSeed() {
    await this.deleteTables();
    const adminUser = await this.insertUsers();

    await this.insertNewStores(adminUser);
    return 'Seed - Insert executed!';
  }

  private async deleteTables() {
    await this.deleteAllStores();

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

  private async insertNewStores(user: User) {
    await this.deleteAllStores();

    const stores = seedStoresData.stores;

    const insertPromises = [];

    stores.forEach((store) =>
      insertPromises.push(this.storesService.create(store, user)),
    );

    await Promise.all(insertPromises);

    return true;
  }

  async deleteAllStores() {
    const query = this.storeRepository.createQueryBuilder('store');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(MessageHandler.UNEXPECTED_ERROR);
    }
  }
}
