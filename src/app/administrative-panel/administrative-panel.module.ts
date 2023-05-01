import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativePanelComponent } from './administrative-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StudentsComponent } from '../pages/students/students.component';
import { MatTableModule } from '@angular/material/table';
import { FormComponent } from '../pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EditStudentComponent } from '../pages/edit-student/edit-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { AttendanceComponent } from '../pages/attendance/attendance.component';
import { CourseComponent } from '../pages/course/course.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'course', component: CourseComponent },
  { path: 'attendance', component: AttendanceComponent }
]

@NgModule({
  declarations: [
    AdministrativePanelComponent,
    StudentsComponent,
    FormComponent,
    EditStudentComponent,
    CourseComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [
    StudentsComponent,
    FormComponent,
    EditStudentComponent
  ],
  entryComponents: [
    EditStudentComponent
  ]
})
export class AdministrativePanelModule { }
