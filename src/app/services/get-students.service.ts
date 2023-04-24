import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, of, take } from 'rxjs';
import { ELEMENT_DATA } from '../constants/constant';
import { formatStudent } from '../interface/students';

@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {

  private _students = new BehaviorSubject<formatStudent[]>(ELEMENT_DATA);

  constructor() {
    this.startPolling();
   }

  private startPolling(): void {
    interval(5000)
      .pipe(take(10))
      .subscribe(() => {
        const updatedStudents = ELEMENT_DATA;
        this._students.next(updatedStudents);
      });
  }

  getStudents(): Observable<any> {
    return this._students.asObservable();
  }

}
