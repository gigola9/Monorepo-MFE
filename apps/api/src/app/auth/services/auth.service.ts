import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  authUser(name, password) {
    if (name && password) {
      return true;
    } else {
      return false;
    }
  }
}
