import {Injectable} from '@angular/core';

@Injectable()

export class AuthService {
  constructor() {
  }

  login(login, password) {
    return localStorage.getItem(login) === password;
  }

  signUp(login, password) {
    localStorage.setItem(login, password);
  }
}
