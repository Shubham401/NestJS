// import * as mongoose from 'mongoose';

// export const DepartmentSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   status: {
//     type: String, enum: ['draft', 'active', 'delete'] , default:'draft'
//   }
// });





import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcrypt';

export const DepartmentSchema = new mongoose.Schema(
    {
        addedBy: {
            type: String,
            // ref: 'User',  User schema will be created
            default: 'admin (name/id of admin from admin table)'
        },
        description: {
            type: String,
            required: true,
        },
        // addedBy
        modifiedBy: {
            type: String,
            // ref: 'User',  User schema will be created
            default: 'admin (name/id of admin from admin table)'
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        //Using enum here - because our values are pre-defined/fixed
        status: {
            type: String,
            enum: ['active', 'delete', 'draft'], default: 'draft'
        },

    },
    { timestamps: true }
);
export const departmentModelName = "department";


