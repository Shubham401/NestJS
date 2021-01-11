import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto extends Document{
    @ApiProperty({ type: String, description: 'name'})
    readonly name : string;
    @ApiProperty({type: String, description: 'description'})
    readonly description : string;
}