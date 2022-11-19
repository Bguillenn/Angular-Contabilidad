import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CuotasComponent } from './pages/cuotas/cuotas.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';
import { DocsComponent } from './pages/docs/docs.component';
import { DocumentosComponent } from './documentos.component';
import { BuildingComponent } from '../building/building.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentosComponent,
    children: [
      {path: 'docs', component: DocsComponent},
      {path: 'cuotas', component: CuotasComponent},
      {path: 'transferencias', component: TransferenciasComponent},

      {path: 'docs/nuevo', component: BuildingComponent},

      {path: '**', redirectTo: 'docs'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class DocumentosRoutingModule { }
