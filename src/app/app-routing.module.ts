import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { AdministrativePanelComponent } from './administrative-panel/administrative-panel.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'panel',
    component: AdministrativePanelComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./administrative-panel/administrative-panel.module').then((m) => m.AdministrativePanelModule)
  },
  { path: "**", pathMatch: "full", redirectTo: "auth"},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
