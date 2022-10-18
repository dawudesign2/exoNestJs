import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  getUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id });
  }

  saveUser(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  deleteUser(user: UserEntity): void {
    this.userRepository.delete(user);
  }
}
