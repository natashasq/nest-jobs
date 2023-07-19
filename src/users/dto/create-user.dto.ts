export class CreateUserDto {
  first_name: string;
  last_name: string;
  title: string;
  location: string;
  about?: string;
  open_for: string[];
  skills: string[];
  email: string;
  phone?: string;
  linkedIn?: string;
}
