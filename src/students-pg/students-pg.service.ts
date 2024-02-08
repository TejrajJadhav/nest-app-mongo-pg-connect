import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';

@Injectable()
export class StudentsPgService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getStudents() {
    const students = await this.knex.table('students');
    return students;
  }
}
