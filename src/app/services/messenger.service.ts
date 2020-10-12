import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  message: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }

  onListPage () {
    this.message.next(true);
  }
}
