import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'src/app/constants/constant';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  displayedColumns: string[] = ['name', 'status', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  
  delete(element: any) {
    const index = ELEMENT_DATA.indexOf(element);
    if (index !== -1) {
      ELEMENT_DATA.splice(index, 1);
    }
    this.dataSource = ELEMENT_DATA.slice(); // Asigna una copia actualizada de ELEMENT_DATA
    return this.dataSource;
  }

  edit(element: any) {
    const index = ELEMENT_DATA.indexOf(element);
    if (index !== -1) {
      ELEMENT_DATA[index]['name'] = "TEST"; // Actualiza la propiedad del objeto
    }
    this.dataSource = ELEMENT_DATA.slice(); // Asigna una copia actualizada de ELEMENT_DATA
    return this.dataSource;
  }
}
