import { Document } from 'mongoose';

export interface Department extends Document{
    id?: string ;            //here id is optional bcoz DB will have automatically
    name: string;
    description: string;
}