import {
  Body,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  get(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getUserById(id);
  }

  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  @Post()
  create(@Body() user: UserEntity) {
    return this.userService.saveUser(user);
  }

  @Put()
  update(@Body() user: UserEntity) {
    return this.userService.saveUser(user);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.userService.deleteUser(params.id);
  }
}
