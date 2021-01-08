import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto'
import { DepartmentsService } from './departments.service';
import { Department } from './interfaces/department.interface'

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Get()
    async findAll(): Promise<Department[]> {
        return this.departmentsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Department> {
        return this.departmentsService.findOne(id);
    }
 
    // To create a department we need to determine the Data Transfer Object
    @Post()
    create(@Body() createDepartmentDto: CreateDepartmentDto): string {
        return `Name: ${createDepartmentDto.name} Desc: ${createDepartmentDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateDepartmentDto: CreateDepartmentDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateDepartmentDto.name}`
    }
}
