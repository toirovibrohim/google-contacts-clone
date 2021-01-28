import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  login: string;
  password: string;
  userNotFound = false;
  sign = false;
  empty = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onAuth() {
    if (this.sign) {
      return this.onRegister();
    }

    if (this.login && this.password && this.authService.login(this.login, this.password)) {
      this.userNotFound = false;
      this.empty = false;
      this.router.navigate(['home']);
    } else if (this.login && this.password) {
      this.userNotFound = true;
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

  onSignUp() {
    this.sign = true;
  }

  onRegister() {
    this.empty = this.userNotFound = false;
    if (this.login && this.password) {
      this.authService.signUp(this.login, this.password);
      window.location.reload();
    } else {
      this.empty = true;
    }
  }

}
