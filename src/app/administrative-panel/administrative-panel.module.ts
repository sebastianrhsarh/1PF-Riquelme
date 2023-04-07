import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativePanelComponent } from './administrative-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AdministrativePanelComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AdministrativePanelComponent
  ]
})
export class AdministrativePanelModule { }
