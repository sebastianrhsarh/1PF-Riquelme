import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService, LoginFormValue } from './auth.service';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';
import { skip } from 'rxjs';
import { FormatUser } from '../interface/user';

describe('Pruebas sobre AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    }).compileComponents();

    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('El login debe funcionar', (done) => {
    const loginFake: LoginFormValue = {
      user: 'Sebastian',
      password: 'Alumno',
    };
    const MOCK_REQUEST_RESULT: FormatUser[] = [
      {
        user: loginFake.user,
        pass: loginFake.password
      },
    ];
    spyOn(TestBed.inject(Router), 'navigate');
    service
      .userAuth()
      .pipe(skip(1))
      .subscribe((usuario) => {
        console.log("usuario",usuario);
        
        expect(usuario).toEqual(MOCK_REQUEST_RESULT[0]);
        done();
      });
    service.userLogged(loginFake);
    httpController
      .expectOne({
        url: `${environment.apiBaseUrl}/users?user=${loginFake.user}&pass=${loginFake.password}`,
        method: 'GET',
      })
      .flush(MOCK_REQUEST_RESULT);
  });

  it('El logout debe emitir un authUser null, remover el token del Localstorage y redireccionar al usuario',
  () => {
    const spyOnNavigate = spyOn(TestBed.inject(Router), 'navigate');
    const loginFake: LoginFormValue = {
      user: 'Sebastian',
      password: 'Alumno',
    };
    const MOCK_REQUEST_RESULT: FormatUser[] = [
      {
        user: loginFake.user,
        pass: loginFake.password
      },
    ];

    service.userLogged(loginFake);
    httpController
      .expectOne({
        url: `${environment.apiBaseUrl}/users?user=${loginFake.user}&pass=${loginFake.password}`,
        method: 'GET',
      })
      .flush(MOCK_REQUEST_RESULT);


    service.logout();

    const tokenLs = localStorage.getItem('token');

    expect(tokenLs).toBeNull();
    expect(spyOnNavigate).toHaveBeenCalled();
  });

  it('should verify user authentication from local storage', () => {
    const mockUser = {
      user: 'Sebastian',
      pass: 'Alumno',
    };

    localStorage.setItem('auth-user', JSON.stringify(mockUser));
    service.verifyStorage();

    service.userAuth().subscribe((user) => {
      expect(user).toEqual(mockUser);
    });
  });

  it('should return null when there is no user authentication from local storage', () => {
    localStorage.removeItem('auth-user');
    service.verifyStorage();

    service.userAuth().subscribe((user) => {
      expect(user).toBeNull();
    });
  });
});
