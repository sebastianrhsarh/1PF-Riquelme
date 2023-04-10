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
    const index = ELEMENT_DATA.indexOf(element);
    if (index !== -1) {
      ELEMENT_DATA.splice(index, 1);
    }
    this.dataSource = ELEMENT_DATA.slice(); // Asigna una copia actualizada de ELEMENT_DATA
    return this.dataSource;
  }

  // edit(element: any) {
  //   const index = ELEMENT_DATA.indexOf(element);
  //   if (index !== -1) {
  //     ELEMENT_DATA[index]['name'] = "TEST"; // Actualiza la propiedad del objeto
  //   }
  //   this.dataSource = ELEMENT_DATA.slice(); // Asigna una copia actualizada de ELEMENT_DATA
  //   return this.dataSource;
  // }

  dialogEditStudent(element: any): void {
    const datos = {
      student: element,
      listStudents: this.dataSource
    }
    const dialogRef = this.dialogService.open(EditStudentComponent, {
      data: JSON.stringify(datos)
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = result;
    })
  }
}
