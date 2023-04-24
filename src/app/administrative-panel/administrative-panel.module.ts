import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativePanelComponent } from './administrative-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StudentsComponent } from '../pages/students/students.component';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from '../pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EditStudentComponent } from '../pages/edit-student/edit-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { AttendanceComponent } from '../pages/attendance/attendance.component';
import { CourseComponent } from '../pages/course/course.component';

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
    AppRoutingModule
  ],
  exports: [
    AdministrativePanelComponent,
    StudentsComponent,
    FormComponent,
    EditStudentComponent
  ],
  entryComponents: [
    EditStudentComponent
  ]
})
export class AdministrativePanelModule { }
