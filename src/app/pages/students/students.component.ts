import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  displayedColumns: string[] = ['name', 'status', 'action'];
  dataSource = ELEMENT_DATA;
}
