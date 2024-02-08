/*
 * Created on Thursday, December 30th 2021
 *
 * Created by tejraj.jadhav@iauro.com
 * Copyright (c) 2022 Copyrights 2021
 *
 */
import { Document } from 'mongoose';

export interface StudentsInterface extends Document {
  readonly name: string;
  id: number;
  readonly department: string;
  readonly roll_number: string;
}
