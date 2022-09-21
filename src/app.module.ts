import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([Product]),
    ProductsModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    SeedModule,
    FilesModule,
    SharedModule,
  ],
})
export class AppModule {}
