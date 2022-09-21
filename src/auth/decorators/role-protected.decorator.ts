import { SetMetadata } from '@nestjs/common';
import { MetaRoles, ValidRoles } from 'src/shared/enums';

export const RoleProtected = (...args: ValidRoles[]) =>
  SetMetadata(MetaRoles.ROLES, args);
