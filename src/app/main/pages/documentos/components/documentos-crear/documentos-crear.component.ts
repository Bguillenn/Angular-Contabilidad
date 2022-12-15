import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos-crear',
  templateUrl: './documentos-crear.component.html',
  styleUrls: ['./documentos-crear.component.css']
})
export class DocumentosCrearComponent implements OnInit {

  titulo:string = "CREAR NUEVO DOCUMENTO"

  constructor() { }

  ngOnInit(): void {
  }

}
