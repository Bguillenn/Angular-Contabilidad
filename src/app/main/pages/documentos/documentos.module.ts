import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './pages/docs/docs.component';
import { CuotasComponent } from './pages/cuotas/cuotas.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';
import { DocumentosRoutingModule } from './documentos-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DocumentosPendientesComponent } from './components/documentos-pendientes/documentos-pendientes.component';
import { DocumentosProcesadosComponent } from './components/documentos-procesados/documentos-procesados.component';
import { MainModule } from '../../main.module';
import { DocumentosCrearComponent } from './components/documentos-crear/documentos-crear.component';



@NgModule({
  declarations: [
    DocsComponent,
    CuotasComponent,
    TransferenciasComponent,
    DocumentosPendientesComponent,
    DocumentosProcesadosComponent,
    DocumentosCrearComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    MainModule,
    MatTabsModule
  ]
})
export class DocumentosModule { }
