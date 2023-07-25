/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable } from '@nestjs/common';
import { v4 as uuisv4 } from 'uuid';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

import { JobRepository } from '../../database/repositories/jobs.repository';
import { Job } from '../../database/schemas/job.schema';

@Injectable()
export class JobsService {
  constructor(private readonly jobRepository: JobRepository) {}

  async getJobById(jobId: string): Promise<Job> {
    return this.jobRepository.findOne({ jobId });
  }

  async getJobs(query?): Promise<Job[]> {
    if (query) {
      return this.jobRepository.find(query);
    }
    return this.jobRepository.find({});
  }

  async createJob({
    employer_name,
    employer_logo,
    job_id,
    job_title,
    job_employment_type,
    job_description,
    job_city,
    job_country,
    job_state,
    job_google_link,
    job_apply_link,
    job_highlights: { Qualifications, Responsibilities, Benefits },
    job_is_remote,
  }: CreateJobDto): Promise<Job> {
    return this.jobRepository.create({
      jobId: uuisv4(),
      employer_name,
      employer_logo,
      job_id,
      job_title,
      job_employment_type,
      job_description,
      job_city,
      job_country,
      job_state,
      job_google_link,
      job_apply_link,
      job_highlights: { Qualifications, Responsibilities, Benefits },
      job_is_remote,
    });
  }

  async updateJob(jobId: string, jobUpdates: UpdateJobDto): Promise<Job> {
    return this.jobRepository.findOneAndUpdate({ jobId }, jobUpdates);
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
