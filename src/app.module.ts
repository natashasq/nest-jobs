import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { SeederModule } from 'database/seeders/seeder.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/jobs_mobile'),
    UsersModule,
    JobsModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
