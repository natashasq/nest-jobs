import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from '../../database/schemas/job.schema';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobServices: JobsService) {}

  @Get(':jobId')
  async getJob(@Param('jobId') jobId: string): Promise<Job> {
    return this.jobServices.getJobById(jobId);
  }

  // @Get()
  // async getJobs(): Promise<Job[]> {
  //   return this.jobServices.getJobs();
  // }

  @Get()
  async getJobs(
    @Query() typeQuery: { job_employment_type: string },
    @Query() titleQuery: { job_title: string },
  ): Promise<Job[]> {
    if (typeQuery.job_employment_type) {
      return this.jobServices.getJobs(typeQuery);
    }
    if (titleQuery.job_title) {
      return this.jobServices.getJobs({
        job_title: { $regex: titleQuery.job_title, $options: 'i' },
      });
    }
    return this.jobServices.getJobs();
  }

  @Post()
  async create(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return this.jobServices.createJob(createJobDto);
  }

  @Patch(':jobId')
  async update(
    @Param('jobId') jobId: string,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobServices.updateJob(jobId, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobServices.remove(+id);
  }
}
