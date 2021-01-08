import { Injectable } from '@nestjs/common';
import { Department } from './interfaces/department.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel('Department') private readonly departmentModel: Model<Department> ) {}

    async findAll(): Promise<Department[]> {
        return await this.departmentModel.find();
    }

    async findOne(id: string): Promise<Department> {
        return await this.departmentModel.findOne({ _id: id });
    }
}
