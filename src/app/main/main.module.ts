import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { BuildingComponent } from './pages/building/building.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { DocumentosModule } from './pages/documentos/documentos.module';
import { DocumentosComponent } from './pages/documentos/documentos.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    DashboardComponent,
    ConsultasComponent,
    ExtrasComponent,
    DocumentosComponent,
    ProveedoresComponent,
    CuentasComponent,
    BuildingComponent,
    HeaderSectionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  exports: [
    BuildingComponent
  ]
})
export class MainModule { }
