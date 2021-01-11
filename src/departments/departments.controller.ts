import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto'
import { DepartmentsService } from './departments.service';
import { Department } from './interfaces/department.interface'

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Get()
    findAll(): Promise<Department[]> {
        return this.departmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Department> {
        return this.departmentsService.findOne(id);
    }
 
    // To create a department we need to determine the Data Transfer Object
    @Post()
    create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        return this.departmentsService.create(createDepartmentDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Department> {
        return this.departmentsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateDepartmentDto: CreateDepartmentDto, @Param('id') id): Promise<Department> {
        return this.departmentsService.update(id, updateDepartmentDto);
    }
}
