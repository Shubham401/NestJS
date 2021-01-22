import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class CommonQueryService {
    async addNewRecord(dbModel, dataToSave): Promise<any> {
        console.log("33333333333333333333**************")

        const savedData = await dbModel.create(dataToSave);
        return savedData;
    }

    async checkIfAlreadyExists(dbModel, condition): Promise<any> {
        const data = await dbModel.find(condition, {});
        if (data && data.length) {
            return true;
        } else if (data.length == 0) {
            return false;
        } else {
            throw `Request can not be processed!`;
        }
    }

    async editSingleRecord(dbModel, condition, dataToUpdate): Promise<any> {
        const data = await dbModel.updateOne(condition, { $set: dataToUpdate });
        if (parseInt(data.nModified) == 0) {
            throw "Operation failed!";
        }
        else {
            return true;
        }
    }

    async fetchSingleCollectionRecord(dbModel, condition, projection, skip, limit, sort): Promise<any> {
        sort = sort ? sort : { _id: -1 };
        const data = await dbModel.find(condition, projection).skip(skip).limit(limit).sort(sort);
        return data;
    }
}
