import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrativePanelModule } from './administrative-panel/administrative-panel.module';
import { AttendanceComponent } from './pages/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdministrativePanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
