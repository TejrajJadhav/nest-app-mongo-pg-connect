import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentsInterface } from 'src/models/students/students.interface';

@Injectable()
export class StudentsMongoService {
  constructor(
    @InjectModel('students')
    readonly StudentsModel: Model<StudentsInterface>,
  ) {}

  async getStudents() {
    const students = await this.StudentsModel.find();
    return students;
  }
}
