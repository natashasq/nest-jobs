/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop()
  jobId: string;

  @Prop()
  employer_name: string;

  @Prop()
  employer_logo: string;

  @Prop()
  job_id: string;

  @Prop()
  job_title: string;

  @Prop()
  job_employment_type: string;

  @Prop()
  job_description: string;

  @Prop()
  job_city: string;

  @Prop()
  job_country: string;

  @Prop()
  job_state: string;

  @Prop()
  job_google_link: string;

  @Prop()
  job_apply_link: string;

  @Prop({ type: Object })
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits: string[];
  };

  @Prop()
  job_is_remote: boolean;
}

export const JobSchema = SchemaFactory.createForClass(Job);
