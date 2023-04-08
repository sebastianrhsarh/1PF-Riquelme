import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  nameControl = new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  lastNameControl = new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      lastName: this.lastNameControl
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
      alert('Estudiante registrado correctamente')
    } else {
      alert('El formulario no es valido');
    }
  }
}

