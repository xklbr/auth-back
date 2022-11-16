import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

import { StoresModule } from 'src/stores/stores.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [StoresModule, UserModule],
})
export class SeedModule {}
