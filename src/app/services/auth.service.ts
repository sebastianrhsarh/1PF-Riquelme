import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { formatStudent } from '../interface/students';
import { FormatUser } from '../interface/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

export interface LoginFormValue {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = new BehaviorSubject<FormatUser | null>(null);

  constructor(
    private router: Router,
    private httpClient: HttpClient
    ) { }

  userAuth(): Observable<FormatUser | null> {
    return this.auth$.asObservable();
  }

  userLogged(formValue: LoginFormValue) {
    this.httpClient.get<FormatUser[]>(`${environment.apiBaseUrl}/users?user=${formValue.user}&pass=${formValue.password}`).subscribe({
      next:(user) => {
        const userAuth = user[0];
        if(userAuth) {
          localStorage.setItem('auth-user', JSON.stringify(user));
          this.auth$.next(userAuth);
          this.router.navigate(['panel', 'students']);
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('auth-user');
    this.auth$.next(null);
    this.router.navigate(['auth']);
  }

  verifyStorage(): void {
    const storageValor = localStorage.getItem('auth-user');
    if (storageValor) {      
      const usuario = JSON.parse(storageValor);
      this.auth$.next(usuario);
    }
  }
}
