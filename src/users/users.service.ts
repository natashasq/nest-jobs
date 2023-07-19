import { Injectable, OnModuleInit } from '@nestjs/common';
import { v4 as uuisv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserRepository } from '../../database/repositories/users.repository';
import { User } from '../../database/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUserOnInit() {
    try {
      const res = await this.userRepository.find({});
      console.log(res.length);
      if (res.length < 1) {
        //add valid condition
        const newUser = {
          userId: uuisv4(),
          first_name: 'Mark',
          last_name: 'Twain',
          title: 'Frontend Developer',
          location: 'US',
          email: 'test1@test.com',
          phone: '+001123123123123',
          about:
            'Self-taught JavaScript Developer with expertise in Node.js and React.',
          open_for: ['Remote', 'Part-time'],
          skills: [
            'React',
            'Next',
            'JavaScript',
            'CSS',
            'HTML',
            'React Native',
          ],
        };
        const user = await this.userRepository.create(newUser);
        console.log(user);
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser({
    first_name,
    last_name,
    location,
    title,
    about,
    open_for,
    skills,
    email,
    phone,
    linkedIn,
  }: CreateUserDto): Promise<User> {
    return this.userRepository.create({
      userId: uuisv4(),
      first_name,
      last_name,
      location,
      title,
      about,
      open_for,
      skills,
      email,
      phone,
      linkedIn,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.userRepository.findOneAndUpdate({ userId }, userUpdates);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
