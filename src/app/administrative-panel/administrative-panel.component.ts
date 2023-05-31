import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { AuthService } from '../services/auth.service';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-administrative-panel',
  templateUrl: './administrative-panel.component.html',
  styleUrls: ['./administrative-panel.component.scss']
})
export class AdministrativePanelComponent {
  showFiller = false;
  name: string = "";
  role: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceAuth: AuthService,
    private currentUser: CurrentUserService
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.role = this.currentUser.getCurrentUser();    
  }

  navigate(value:number) {
    switch (value) {
      case 1:
        this.router.navigate(['/panel/form'], {queryParams: {name: "Formulario de Registro de Alumno"}});
        break;
      case 2:
        this.router.navigate(['/panel/students'], {queryParams: {name: "Lista de Alumnos"}});
        break;
      case 3:
        this.router.navigate(['/panel/attendance'], {queryParams: {name: "Asistencia de Alumnos"}});
        break;
      case 4:
        this.router.navigate(['/panel/course'], {queryParams: {name: "Cursos"}});
        break;
      default:
        this.router.navigate(['/'])
        break;
    }
  }

  logout() {
    this.serviceAuth.logout();
  }
}
