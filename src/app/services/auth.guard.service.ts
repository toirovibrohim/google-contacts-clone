import {Injectable} from '@angular/core';
import {ActivatedRoute, CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private route: ActivatedRoute) {}

  canActivate() {
    console.log('checking if can enter?!');
    return true;
  }
}
