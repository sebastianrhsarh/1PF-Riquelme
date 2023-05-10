import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { formatCourse } from '../interface/course';
import { GetCourseService } from './get-course.service';

describe('Pruebas sobre AuthService', () => {
  let service: GetCourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    service = TestBed.inject(GetCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of courses', () => {
    const courses: formatCourse[] = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'React' },
      { id: 3, name: 'NodeJs' },
      { id: 4, name: 'HTML y CSS' },
      { id: 5, name: 'Javascript' }
    ];
    spyOn(service, 'getCourses').and.returnValue(of(courses));
    service.getCourses().subscribe((result) => {
      expect(result).toEqual(courses);
    });
  });
});
