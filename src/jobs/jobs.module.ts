import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from '../../database/schemas/job.schema';
import { JobsController } from './jobs.controller';

import { JobsService } from './jobs.service';
import { JobsRepository } from '../../database/repositories/jobs.repository';

JobsRepository;

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobsController],
  providers: [JobsService, JobsRepository],
})
export class JobsModule {}
