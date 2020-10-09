import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NewUser } from '../models/new-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private router: Router) {
    this.loadUser()
   }

   saveUser(user: User) {
     localStorage.setItem('firstName', user.first_name);
     localStorage.setItem('lastName', user.last_name);
     localStorage.setItem('userEmail', user.email);
     localStorage.setItem('nickname', user.nickname);
     localStorage.setItem('token', user.token)
     localStorage.setItem('userId', user.id.toString());
     this.currentUser.next(user)
   }

   loadUser() {
    const user = new User
    user.token = localStorage.getItem('token');
    user.first_name = localStorage.getItem('firstName');
    user.last_name = localStorage.getItem('lastName');
    user.email = localStorage.getItem('userEmail');
    user.nickname = localStorage.getItem('nickname');
    user.id = Number(localStorage.getItem('userId'));
      if (user.token !== null && user.token !== undefined) {
        this.currentUser.next(user);
      }
   }

   getToken() {
    return this.currentUser.getValue().token;
   }

  logoutUser() {
    localStorage.clear();
    this.currentUser.next(null);
  }

  isLoggedIn() {
    const user = this.currentUser.getValue();
      if(user !== null) {
        const token = user.token;
        return token !== null
    }
      return false;
  }

}
