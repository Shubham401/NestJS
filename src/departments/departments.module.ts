import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { DepartmentSchema } from './schemas/department.schema';
import { CommonModule } from '../common/common.module';
@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema}]),
    MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }], 'KNOW-MX_DB'),
    CommonModule
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule { }
