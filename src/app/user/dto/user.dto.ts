import { RoleEnum } from 'src/app/auth/role.enum';

export type UserDto = {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  isActive: boolean;
  roles: RoleEnum[];
}