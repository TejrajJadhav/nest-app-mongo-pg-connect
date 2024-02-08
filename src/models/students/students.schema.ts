import * as mongoose from 'mongoose';

export const StudentsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roll_number: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});
