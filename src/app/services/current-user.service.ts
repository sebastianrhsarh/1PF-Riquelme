import { Injectable } from '@angular/core';
import { FormatUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  currentUser: string = ""

  constructor() { }

  saveCurrentUser(role: string): void {
    this.currentUser = role;    
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
