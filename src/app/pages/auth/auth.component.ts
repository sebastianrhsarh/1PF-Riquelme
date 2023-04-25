import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constant';
import { AuthService, LoginFormValue } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  userControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  passControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router:Router,
    private authService: AuthService
    ) {

    this.loginForm = this.formBuilder.group({
      name: this.userControl,
      lastName: this.passControl
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.userLogged(this.loginForm.value as LoginFormValue)
    } else {
      alert('El formulario no es valido');
    }
  }
}
