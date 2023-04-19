import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ELEMENT_DATA } from 'src/app/constants/constant';
import { formatStudent } from 'src/app/interface/students';
import { GetStudentsService } from 'src/app/services/get-students.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  students$: Observable<formatStudent[]>;
  displayedColumns: string[] = ['name', 'attendance'];
  dataSource = ELEMENT_DATA

  constructor(private studentService: GetStudentsService) {
    this.students$ = this.studentService.getStudents();
    console.log("this.students$",this.students$);
  }
  
}
