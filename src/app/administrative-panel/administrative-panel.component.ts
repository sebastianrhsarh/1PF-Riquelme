import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrative-panel',
  templateUrl: './administrative-panel.component.html',
  styleUrls: ['./administrative-panel.component.scss']
})
export class AdministrativePanelComponent {
  showFiller = false;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/students'])
  }
}
