import { Injectable } from '@angular/core';
import { FormatUser } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  currentUser: string = ""

  constructor(
    private httpClient: HttpClient,
  ) { }

  saveCurrentUser(role: string): void {
    this.currentUser = role;    
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUsers() {
    return this.httpClient.get<FormatUser[]>(`${environment.apiBaseUrl}/users`);
  }
}
