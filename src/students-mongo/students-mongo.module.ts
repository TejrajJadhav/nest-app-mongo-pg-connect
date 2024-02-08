import { Module } from '@nestjs/common';
import { StudentsMongoService } from './students-mongo.service';
import { StudentsMongoController } from './students-mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from 'src/models/students/students.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'students', schema: StudentsSchema }]),
  ],
  controllers: [StudentsMongoController],
  providers: [StudentsMongoService],
})
export class StudentsMongoModule {}
