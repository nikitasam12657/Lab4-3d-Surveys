"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const survey_entity_1 = require("../surveys/entities/survey.entity");
const response_entity_1 = require("../responses/entities/response.entity");
const path = require("path");
const migrationsPath = path.join(__dirname, 'migrations', '*.{ts,js}');
console.log(migrationsPath);
(0, dotenv_1.config)();
exports.dataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [survey_entity_1.Survey, response_entity_1.Response],
    migrations: [migrationsPath],
    synchronize: false,
};
const AppDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map