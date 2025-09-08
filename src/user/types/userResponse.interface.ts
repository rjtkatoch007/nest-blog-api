/* eslint-disable prettier/prettier */
import { IUser } from '../types/user.type';

export interface IUserResponse {
    user: IUser & { token: string };
}
