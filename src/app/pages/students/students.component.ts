import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constant';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  displayedColumns: string[] = ['name', 'status', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private dialogService: MatDialog) {}
  
  delete(element: any) {
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
    this.dataSource = this.dataSource.slice();
    return this.dataSource;
  }

  dialogEditStudent(element: any): void {
    const datos = {
      student: element,
      listStudents: this.dataSource
    }
    const dialogRef = this.dialogService.open(EditStudentComponent, {
      data: JSON.stringify(datos)
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataSource = result;
      }
    })
  }
}
