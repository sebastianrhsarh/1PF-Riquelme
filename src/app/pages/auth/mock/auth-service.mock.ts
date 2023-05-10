import { BehaviorSubject, Observable, of } from "rxjs";
import { FormatUser } from "src/app/interface/user";
import { LoginFormValue } from "src/app/services/auth.service";

export const USUARIO_ADMIN_MOCK: FormatUser = {
  user: 'Sebastian',
  pass: 'Alumno',
}

export class AuthServiceMock {

  private authUser$ = new BehaviorSubject<FormatUser | null>(null);

  userLogged(formValue: LoginFormValue): void {
    this.authUser$.next(USUARIO_ADMIN_MOCK);
  }

  verifyStorage(): Observable<boolean> {
    return of(true);
  }
}
