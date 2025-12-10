import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
