import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
private user$=new Subject<User>();

  login(email:string, password:string){
    return of({email, password})
  }
  register(data:User){
    this.user$.next(data);
    return of(data);
    
  }
}
