import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DepartmentsController } from './departments/departments.controller';
//import { DepartmentsService } from './departments/departments.service';
import { DepartmentsModule } from './departments/departments.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DepartmentsModule, MongooseModule.forRoot(config.mongoURI), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },
],
})
export class AppModule {}
