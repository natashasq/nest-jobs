import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from '../../database/schemas/job.schema';
import { JobsController } from './jobs.controller';

import { JobsService } from './jobs.service';
import { JobRepository } from '../../database/repositories/jobs.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobsController],
  providers: [JobsService, JobRepository],
})
export class JobsModule {}
