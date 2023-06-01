import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { formatStudent } from '../interface/students';
import { FormatUser } from '../interface/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { CurrentUserService } from './current-user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { establishUserAuth, removeUserAuth } from '../store/auth/auth.actions';
import { selectAuthUser } from '../store/auth/auth.selectors';

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
    private httpClient: HttpClient,
    private currentUser: CurrentUserService,
    private store: Store<AppState>
    ) { }

  userAuth(): Observable<FormatUser | null> {
    return this.store.select(selectAuthUser);
  }

  establishUser(user: any): void {
    this.store.dispatch(establishUserAuth({payload: user}));
  }

  userLogged(formValue: LoginFormValue) {
    this.httpClient.get<FormatUser[]>(`${environment.apiBaseUrl}/users?user=${formValue.user}&pass=${formValue.password}`).subscribe({
      next:(user) => {
        const userAuth = user[0];
        if(userAuth) {          
          localStorage.setItem('auth-user', JSON.stringify(user));
          this.establishUser(userAuth);
          this.auth$.next(userAuth);
          this.router.navigate(['panel', 'students']);
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('auth-user');
    this.store.dispatch(removeUserAuth())
    this.router.navigate(['auth']);
  }

  verifyStorage(): void {
    const storageValor = localStorage.getItem('auth-user');
    if (storageValor !== null) {
      const response = JSON.parse(storageValor);
      const role = response[0].role;
      this.currentUser.saveCurrentUser(role);
    }
    
    if (storageValor) {      
      this.store.select(selectAuthUser);
    }
  }
}
