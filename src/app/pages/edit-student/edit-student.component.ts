import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {  
  dataEdit = JSON.parse(this.message);

  nameControl = new FormControl(this.dataEdit.student.name,[Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  lastNameControl = new FormControl(this.dataEdit.student.lastName,[Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  statusControl = new FormControl(this.dataEdit.student.status ? 'approved' : 'reprobate',[]);
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditStudentComponent>, @Inject(MAT_DIALOG_DATA) public message:string) {

    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      lastName: this.lastNameControl,
      status: this.statusControl
    });    
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const beforeStudent = this.dataEdit.student;
      const student = this.registerForm.value;
      const students = this.dataEdit.listStudents;
      const index = students.findIndex((s:any) => s.name === beforeStudent.name && s.lastname === beforeStudent.lastname);
      if (index >= 0) {
        students[index] = student;
        this.dialogRef.close(students)
      } else {
        alert('Inténtelo nuevamente');
      }
    } else {
      alert('El formulario no es valido');
    }
  }
}
