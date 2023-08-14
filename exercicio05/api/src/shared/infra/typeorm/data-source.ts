import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicle';
import { CreateBrandTable1691752630849 } from './migrations/1691752630849-CreateBrandTable';
import { CreateVehicleTable1691752782401 } from './migrations/1691752782401-CreateVehicleTable';
import { InsertBrandTable1691753468151 } from './migrations/1691753468151-InsertBrandTable';
import Brand from '@modules/vehicles/infra/typeorm/entities/Brand';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Vehicle, Brand],
  migrations: [
    CreateVehicleTable1691752782401,
    CreateBrandTable1691752630849,
    InsertBrandTable1691753468151,
  ],
  subscribers: [],
});
