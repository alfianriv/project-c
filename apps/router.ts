import * as dotenv from 'dotenv';
import { DatabaseModule } from './dashboard/config/database/database.module';
import { AccessTokenModule } from './dashboard/modules/access-token/access-token.module';
import { AuthModule } from './dashboard/modules/auth/auth.module';
import { PermissionModule } from './dashboard/modules/permission/permission.module';
import { MenuModuleModule } from './dashboard/modules/menu-module/menu-module.module';
import { ModuleModule } from './dashboard/modules/module/module.module';
import { RoleModule } from './dashboard/modules/role/role.module';
import { UserAccessModule } from './dashboard/modules/user-access/user-access.module';

dotenv.config();

const RouterDashboard = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'user-accesses',
        module: UserAccessModule,
      },
      {
        path: 'roles',
        module: RoleModule,
      },
      {
        path: 'permissions',
        module: PermissionModule,
      },
      {
        path: 'modules',
        module: ModuleModule,
      },
      {
        path: 'menu-modules',
        module: MenuModuleModule,
      },
      {
        path: 'access-token',
        module: AccessTokenModule,
      },
      {
        path: 'auth',
        module: AuthModule,
      },
    ],
  },
];

const RouterPortal = [
  {
    path: 'portal',
    children: [],
  },
];

export const RouterApp = () => {
  let router: any = [];

  switch (process.env.APP) {
    case 'portal':
      router = RouterPortal;
      break;
    case 'dashboard':
      router = RouterDashboard;
      break;
  }

  return router;
};

const BASE_MODULE = [DatabaseModule];

const MODULES_PARTIAL = () => {
  let modules: any = [];
  switch (process.env.APP) {
    case 'portal':
      modules = [];
      break;

    case 'dashboard':
      modules = [
        UserAccessModule,
        RoleModule,
        PermissionModule,
        ModuleModule,
        MenuModuleModule,
        AccessTokenModule,
        AuthModule,
      ];
      break;
  }
  return modules;
};

export const MODULES = [...BASE_MODULE, ...MODULES_PARTIAL()];
