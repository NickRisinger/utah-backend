"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const logger = new common_1.Logger('TypeOrm');
const dataSourceOptions = {
    type: 'sqlite',
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    migrationsTableName: 'migrations',
    migrationsRun: true,
    synchronize: false,
};
console.log('dataSourceOptions: ', dataSourceOptions);
const dataSource = new typeorm_1.DataSource(dataSourceOptions);
const getTypeOrmConfig = async (configService) => (Object.assign(Object.assign({}, dataSourceOptions), { logging: configService.get('DATABASE_LOGGING') || true, logger: logger.log.bind(logger) }));
exports.getTypeOrmConfig = getTypeOrmConfig;
exports.default = dataSource;
//# sourceMappingURL=type-orm.config.js.map