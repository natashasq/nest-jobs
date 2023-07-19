export class CreateJobDto {
  employer_name: string;
  employer_logo: string;
  job_id: string;
  job_title: string;
  job_employment_type: string;
  job_description: string;
  job_city: string;
  job_country: string;
  job_state: string;
  job_google_link: string;
  job_apply_link: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits: string[];
  };
  job_is_remote: boolean;
}
