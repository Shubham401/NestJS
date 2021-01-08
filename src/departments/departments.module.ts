import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { DepartmentSchema } from './schemas/department.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema}])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
