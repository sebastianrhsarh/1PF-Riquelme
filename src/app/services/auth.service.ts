import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { formatStudent } from '../interface/students';
import { FormatUser } from '../interface/user';
import { Router } from '@angular/router';

export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = new BehaviorSubject<FormatUser | null>(null);

  constructor(private router: Router) { }

  userAuth(): Observable<FormatUser | null> {
    return this.auth$.asObservable();
  }

  userLogged(formValue: LoginFormValue) {
    const user = {
      user: "TEST",
      pass: "TEST"
    }
    localStorage.setItem('auth-user', JSON.stringify(user));
    this.auth$.next(user);
    this.router.navigate(['panel', 'students']);
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
