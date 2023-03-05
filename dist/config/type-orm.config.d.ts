import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
declare const dataSource: DataSource;
export declare const getTypeOrmConfig: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
export default dataSource;
