import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { FormComponent } from './pages/form/form.component';
import { CourseComponent } from './pages/course/course.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdministrativePanelComponent } from './administrative-panel/administrative-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  {
    path: 'panel',
    component: AdministrativePanelComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'course', component: CourseComponent },
      { path: 'attendance', component: AttendanceComponent }
    ]
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
