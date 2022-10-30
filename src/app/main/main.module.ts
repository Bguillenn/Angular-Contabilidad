import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';

import { MainRoutingModule } from './main-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { BuildingComponent } from './pages/building/building.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    DashboardComponent,
    DocumentosComponent,
    ConsultasComponent,
    ExtrasComponent,
    ProveedoresComponent,
    CuentasComponent,
    BuildingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule
  ]
})
export class MainModule { }
