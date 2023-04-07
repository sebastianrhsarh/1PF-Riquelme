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



@NgModule({
  declarations: [
    AdministrativePanelComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports: [
    AdministrativePanelComponent,
    StudentsComponent
  ]
})
export class AdministrativePanelModule { }
