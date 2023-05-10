import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule, } from "@angular/router/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "../../services/auth.service";
import { AuthServiceMock } from "./mock/auth-service.mock";
import { AuthComponent } from "./auth.component";
import { MatCardModule } from "@angular/material/card";

describe('Pruebas del LoginComponent', () => {
  let component: AuthComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        PipesModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock,
        }
      ]
    }).compileComponents();
    const fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Sin user debe ser formulario inválido', () => {
    component.loginForm.setValue({ user: null, password: null })
    expect(component.userControl.invalid).toBeTrue();
  });

  it('Sin pass debe ser formulario inválido', () => {
    component.loginForm.setValue({ user: null, password: null })
    expect(component.passControl.invalid).toBeTrue();
  });

  it('Llamar al onSubmit', () => {
    component.loginForm.setValue({ user: null, password: null })
    component.onSubmit();
  });

  it('Si el formulario es valido que llame al servicio de autenticación', () => {
    component.loginForm.setValue({ user: 'Sebastian', password: 'Alumno' });
    const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService), 'userLogged');
    component.onSubmit();
    expect(component.loginForm.valid).toBeTrue();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});
