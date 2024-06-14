import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private message = new BehaviorSubject(true);
  getMessage = this.message.asObservable();
  private toggleSubject = new BehaviorSubject<boolean>(false);
  toogleState$ = this.toggleSubject.asObservable();
  constructor() { }

  sendMessage(message: boolean){
    this.message.next(message)
  }

  show(value: boolean) {
    this.toggleSubject.next(value);
  }

}
