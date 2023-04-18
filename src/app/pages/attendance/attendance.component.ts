import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { formatStudent } from 'src/app/interface/students';
import { GetStudentsService } from 'src/app/services/get-students.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  students$: Observable<formatStudent[]>;

  constructor(private studentService: GetStudentsService) {
    this.students$ = this.studentService.getStudents();
  }
}
