import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { formatCourse } from '../interface/course';

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  private data: formatCourse[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'NodeJs' },
    { id: 4, name: 'HTML y CSS' },
    { id: 5, name: 'Javascript' }
  ];

  constructor() { }
  
  getCourses(): Observable<formatCourse[]> {
    return of(this.data)
  }
}
