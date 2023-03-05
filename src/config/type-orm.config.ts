import * as dotenv from 'dotenv';
dotenv.config();

import { Logger } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const logger = new Logger('TypeOrm');

const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
};

console.log('dataSourceOptions: ', dataSourceOptions);

const dataSource: DataSource = new DataSource(dataSourceOptions);

export const getTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  ...dataSourceOptions,
  logging: configService.get<boolean>('DATABASE_LOGGING') || true,
  logger: logger.log.bind(logger),
});

export default dataSource;
