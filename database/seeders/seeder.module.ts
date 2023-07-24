/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../database/schemas/user.schema';
import { UserRepository } from '../../database/repositories/users.repository';
import { SeederSerice } from './seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [SeederSerice, UserRepository],
})
export class SeederModule implements OnModuleInit {
  constructor(private seederService: SeederSerice) {}
  onModuleInit() {
    this.seederService.createUserOnInit();
  }
}
