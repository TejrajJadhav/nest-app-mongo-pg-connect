import { Controller, Get } from '@nestjs/common';
import { StudentsPgService } from './students-pg.service';

@Controller('students-pg')
export class StudentsPgController {
  constructor(private readonly studentsPgService: StudentsPgService) {}

  @Get()
  getStudentsFromPg(): any {
    return this.studentsPgService.getStudents();
  }
}
