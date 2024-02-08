import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsPgModule } from './students-pg/students-pg.module';
import { StudentsMongoModule } from './students-mongo/students-mongo.module';
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const ENV = `.env.${process.env.NODE_ENV}`;
console.log(ENV);
@Module({
  imports: [
    // mongo
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    KnexModule.forRoot({
      config: {
        client: 'postgres',
        connection: {
          host: '0.0.0.0',
          user: 'postgres',
          password: 'password',
          database: 'students_data',
          port: 5432,
        },
      },
    }),
    StudentsPgModule,
    StudentsMongoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
