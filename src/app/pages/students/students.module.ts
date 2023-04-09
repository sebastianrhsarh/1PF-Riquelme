import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from 'src/app/shared/pipes/full-name.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FullNamePipe
  ]
})
export class StudentsModule { }
