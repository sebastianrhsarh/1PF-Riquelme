import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { FormComponent } from './pages/form/form.component';
import { CourseComponent } from './pages/course/course.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdministrativePanelComponent } from './administrative-panel/administrative-panel.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'panel',
    component: AdministrativePanelComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'form', component: FormComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'course', component: CourseComponent },
      { path: 'attendance', component: AttendanceComponent }
    ]
  },
  // {
  //   path: 'panel',
  //   component: AdministrativePanelComponent,
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./administrative-panel/administrative-panel.module').then((m) => m.AdministrativePanelModule)
  // },
  { path: "**", pathMatch: "full", redirectTo: "auth"},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
