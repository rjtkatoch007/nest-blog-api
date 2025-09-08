/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    createUser(createUserDto: CreateUserDto): CreateUserDto {
        return createUserDto
    }
}
