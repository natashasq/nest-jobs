/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from '../schemas/job.schema';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<JobDocument> {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {
    super(jobModel);
  }
}
