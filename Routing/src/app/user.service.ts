import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   usernameEmitter = new EventEmitter<string>();

  constructor() { }
}
