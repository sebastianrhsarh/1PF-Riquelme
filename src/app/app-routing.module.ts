import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { FormComponent } from './pages/form/form.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'course', component: CourseComponent },
  { path: 'attendance', component: AttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
