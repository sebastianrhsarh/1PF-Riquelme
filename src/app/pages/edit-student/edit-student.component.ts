import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {
  nameControl = new FormControl('',[Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  lastNameControl = new FormControl('',[Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  statusControl = new FormControl('',[]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      lastName: this.lastNameControl
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }
}
