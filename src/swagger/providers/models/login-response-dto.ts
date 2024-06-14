/* tslint:disable */
/* eslint-disable */
import { UserModel } from '../models/user-model';
export interface LoginResponseDto {
  access_token: string;
  user: UserModel;
}
