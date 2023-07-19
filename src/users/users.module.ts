import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../database/schemas/user.schema';
import { UsersController } from './users.controller';
import { UserRepository } from '../../database/repositories/users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule implements OnModuleInit {
  constructor(private usersService: UsersService) {}
  onModuleInit() {
    this.usersService.createUserOnInit();
  }
}
