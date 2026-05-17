import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveysModule } from './surveys/surveys.module';
import { ResponsesModule } from './responses/responses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Завантажує .env
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      ...dataSourceOptions,
      // Перевизначаємо ключові поля через ConfigService для гнучкості
      host: configService.get<string>('DATABASE_URL'),
      autoLoadEntities: true,
    }),
  }),
    SurveysModule, ResponsesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
