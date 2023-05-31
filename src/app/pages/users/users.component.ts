import { Component } from '@angular/core';
import { formatCourse } from 'src/app/interface/course';
import { GetCourseService } from 'src/app/services/get-course.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  dataSource: formatCourse[] = [];
  displayedColumns: string[] = ['id', 'name'];
  constructor(private courseService: GetCourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.dataSource = data;
    });
  }


}
