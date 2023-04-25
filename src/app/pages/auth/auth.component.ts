import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  userControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  passControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router:Router) {

    this.registerForm = this.formBuilder.group({
      name: this.userControl,
      lastName: this.passControl
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, lastName } = this.registerForm.value;
      const newFormat = {
        name,
        lastName,
        status: false
      }
      ELEMENT_DATA.push(newFormat);
      alert('Estudiante registrado correctamente');
      this.router.navigate(['/students']);
    } else {
      alert('El formulario no es valido');
    }
  }
}
