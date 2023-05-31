import { Component } from '@angular/core';
import { formatCourse } from 'src/app/interface/course';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { GetCourseService } from 'src/app/services/get-course.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = ['role', 'name'];
  constructor(
    private userService: CurrentUserService
    ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = data;
    })
    
  }


}
