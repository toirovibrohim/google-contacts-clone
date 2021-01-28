import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()

export class CommonService {
  public sidebar = new Subject<null>();
  constructor() {}

  toggle() {
    return this.sidebar.next(null);
  }
}
