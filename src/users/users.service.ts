import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  async create(user: CreateUserDto): Promise<User> {
    return await this.userModel.create<User>(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne<User>({ where: { email } });
  }
}
