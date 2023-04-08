import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    console.log(this.registerForm.get('nombre')?.value)
    console.log(this.lastNameControl.value);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }
}

