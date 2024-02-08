import { Controller, Get } from '@nestjs/common';
import { StudentsMongoService } from './students-mongo.service';

@Controller('students-mongo')
export class StudentsMongoController {
  constructor(private readonly studentsMongoService: StudentsMongoService) {}

  @Get()
  getStudentsFromMongo(): any {
    return this.studentsMongoService.getStudents();
  }
}
