/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 as uuisv4 } from 'uuid';

import { UserRepository } from '../../database/repositories/users.repository';

@Injectable()
export class SeederSerice {
  constructor(private readonly userRepository: UserRepository) {}

  async createUserOnInit() {
    try {
      const res = await this.userRepository.find({});
      console.log(res.length);
      if (res.length <= 1) {
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
}
