import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  activeLinkIndex = -1;
  navLinks : any[] = [
    {label: 'Documentos', link: './docs', index: 0},
    {label: 'Pago por cuotas', link: './cuotas', index: 1},
    {label: 'Transferencias / Tipo de cambio', link: './transferencias', index: 2},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
