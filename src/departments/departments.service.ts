import { Injectable } from '@nestjs/common';
import { Department } from './interfaces/department.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommonQueryService } from '../common/commonQuery.services';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel('Department') private readonly departmentModel: Model<Department>,
        private commonQueryService: CommonQueryService
    ) { }

    async findAll(): Promise<Department[]> {
        return await this.departmentModel.find();
    }

    async findOne(id: string): Promise<Department> {
        return await this.departmentModel.findOne({ _id: id });
    }

    async create(department: Department): Promise<Department> {
        // const newDepartment = new this.departmentModel(department);
        // return await newDepartment.save();
        return await this.commonQueryService.addNewRecord(this.departmentModel, department)
    }

    async delete(id: string): Promise<Department> {
        // return await this.departmentModel.findByIdAndRemove(id);
        let condition = { _id: id },
            dataToUpdate = { status: 'delete' };
        return await this.commonQueryService.editSingleRecord(this.departmentModel, condition, dataToUpdate);

    }

    async update(id: string, department: Department): Promise<Department> {
        // return await this.departmentModel.findByIdAndUpdate(id, department, { new: true });
        let condition = { _id: id },
            dataToUpdate = department;
        return await this.commonQueryService.editSingleRecord(this.departmentModel, condition, dataToUpdate);
    }
}
