import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public showFiller = false;
  public location!: string;
  public readonly routes = {
    dashboard: '/dashboard',
    documentos: '/documentos',
    consultas: '/consultas',
    extras: '/extras',
    proveedores: '/proveedores',
    cuentas: '/cuentas'
  }

  public isCurrentRoute(route: string): boolean {
    let currentPath = window.location.pathname;
    return currentPath.includes(route);
  }

  constructor() {  }

  ngOnInit(): void { }
}
