import { Document } from 'mongoose';

export class CreateDepartmentDto extends Document{
    readonly name : string;
    readonly description : string;
}