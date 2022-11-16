import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoresModule } from './stores/stores.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { Store } from './stores/entities/store.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([Store]),
    StoresModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    SeedModule,
    SharedModule,
  ],
})
export class AppModule {}
