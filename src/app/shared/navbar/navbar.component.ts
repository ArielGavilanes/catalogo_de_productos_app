import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      label: 'Inicio',
      routerLink: '/home',
    },
    {
      label: 'Crear',
      routerLink: '/create',
    },
  ];
}
