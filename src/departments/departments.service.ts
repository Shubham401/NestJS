import { Injectable } from '@nestjs/common';
import { Department } from './interfaces/department.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommonQueryService } from '../common/commonQuery.services';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';


import { DepartmentSchema, departmentModelName } from "../departments/schemas/department.schema";

const { getModelName } = require("../shared/dynamicDbs");


@Injectable()
export class DepartmentsService {
    constructor(@InjectModel('Department') private readonly departmentModel: Model<Department>,
        private commonQueryService: CommonQueryService,

        @InjectConnection('KNOW-MX_DB') private defaultConnection: Connection


    ) { }

    async findAll(request: any): Promise<Department[]> {

        // const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);
        const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);
        //console.log(request);
        return await departmentModel.find();
    }

    async findOne(request: any, id: string): Promise<Department> {
        const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);
        return await departmentModel.findOne({ _id: id });
    }

    async create(request: any, department): Promise<Department> {
        // const newDepartment = new this.departmentModel(department);
        // return await newDepartment.save();

        const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);

        return await this.commonQueryService.addNewRecord(departmentModel, department)
    }

    async delete(request: any, id: string): Promise<Department> {
        // return await this.departmentModel.findByIdAndRemove(id);
        let condition = { _id: id },
            dataToUpdate = { status: 'delete' };
        const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);
        return await this.commonQueryService.editSingleRecord(departmentModel, condition, dataToUpdate);

    }

    async update(request: any, id: string, department: Department): Promise<Department> {
        // return await this.departmentModel.findByIdAndUpdate(id, department, { new: true });
        let condition = { _id: id },
            dataToUpdate = department;
        const departmentModel = await getModelName(request, DepartmentSchema, departmentModelName, this.defaultConnection);

        return await this.commonQueryService.editSingleRecord(departmentModel, condition, dataToUpdate);
    }
}
