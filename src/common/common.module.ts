import { Module } from '@nestjs/common';

import { CommonQueryService } from "./commonQuery.services"

@Module({
    imports: [],
    providers: [ CommonQueryService],
    exports: [ CommonQueryService ]
})
export class CommonModule {}
