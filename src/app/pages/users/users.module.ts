import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
