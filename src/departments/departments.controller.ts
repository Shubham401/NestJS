import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateDepartmentDto } from './dto/create-department.dto'
import { DepartmentsService } from './departments.service';
import { Department } from './interfaces/department.interface'
import { Role } from '../enums/role.enum';
import { Roles } from '../enums/roles.decorator'

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }

    @Get()
    @ApiCreatedResponse({ description: 'To Fetch All The Departments' })
    findAll(@Req() request,): Promise<Department[]> {
        return this.departmentsService.findAll(request);
    }

    @Get(':id')
    @ApiCreatedResponse({ description: 'To Fetch A Department Of A Particular ID' })
    findOne(@Req() request, @Param('id') id): Promise<Department> {
        return this.departmentsService.findOne(request, id);
    }

    // To create a department we need to determine the Data Transfer Object
    @Post()
    @Roles(Role.Admin)
    @ApiCreatedResponse({ description: 'To Create A Department' })
    @ApiBody({ type: CreateDepartmentDto })
    @ApiBearerAuth()
    create(@Req() request, @Body() createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        return this.departmentsService.create(request, createDepartmentDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({ description: 'To Delete A Department' })
    @ApiOkResponse({ description: 'Department Deleted' })
    @ApiBearerAuth()
    delete(@Req() request, @Param('id') id): Promise<Department> {
        return this.departmentsService.delete(request, id);
    }

    @Put(':id')
    @ApiCreatedResponse({ description: 'To Update A Department' })
    @ApiOkResponse({ description: 'Department Updated' })
    @ApiBearerAuth()
    update(@Req() request, @Body() updateDepartmentDto: CreateDepartmentDto, @Param('id') id): Promise<Department> {
        return this.departmentsService.update(request, id, updateDepartmentDto);
    }
}
