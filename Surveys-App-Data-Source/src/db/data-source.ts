import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Survey } from '../surveys/entities/survey.entity';
import { Response } from '../responses/entities/response.entity';
import * as path from 'path';

//  Use next commands to manage migrations:
//  npx typeorm-ts-node-commonjs migration:generate src/db/migrations/InitialMigration -d src/db/data-source.ts
//  npx typeorm-ts-node-commonjs migration:run -d src/db/data-source.ts

const migrationsPath = path.join(__dirname, 'migrations', '*.{ts,js}');
console.log(migrationsPath);
// Завантажуємо .env змінні (важливо для TypeORM CLI)
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: [Survey, Response],
  migrations: [migrationsPath],
  synchronize: false, // Для безпеки в продакшні завжди false
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
