import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Product } from 'src/products/entities/product.entity';
import { ValidRoles } from 'src/shared/enums';
import { ValidStatus } from 'src/shared/enums/valid.status';

@Entity('user')
export class User {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude({ toPlainOnly: true })
  @Column('text', { unique: true })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Exclude({ toPlainOnly: true })
  @Column('text')
  name: string;

  @Exclude({ toPlainOnly: true })
  @Column('text')
  lastname: string;

  @Column('text', {
    nullable: true,
    default: ValidStatus.ACTIVE,
  })
  status: string;

  @Exclude({ toPlainOnly: true })
  @Column('text', {
    array: true,
    nullable: true,
    default: [ValidRoles.USER],
  })
  roles: string[];

  @OneToMany(() => Product, (product) => product.user)
  product: Product;

  @BeforeInsert()
  checkFieldBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
    this.name = this.name.toLocaleLowerCase().trim();
    this.lastname = this.lastname.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldBeforeInsert();
  }
}
