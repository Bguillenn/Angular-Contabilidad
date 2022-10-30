import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'documentos', component: DocumentosComponent},
      {path: 'consultas', component: ConsultasComponent},
      {path: 'extras', component: ExtrasComponent},
      {path: 'proveedores', component: ProveedoresComponent},
      {path: 'cuentas', component: CuentasComponent},
      {path: '**', redirectTo: 'dashboard'}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class MainRoutingModule { }
