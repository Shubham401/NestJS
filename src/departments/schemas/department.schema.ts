import * as mongoose from 'mongoose';

export const DepartmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: {
    type: String, enum: ['draft', 'active', 'delete'] , default:'draft'
  }
});