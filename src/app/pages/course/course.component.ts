import { Component, OnInit } from '@angular/core';
import { formatCourse } from 'src/app/interface/course';
import { GetCourseService } from 'src/app/services/get-course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  dataSource: formatCourse[] = [];
  displayedColumns: string[] = ['id', 'name'];
  constructor(private courseService: GetCourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.dataSource = data;
    });
  }

}
