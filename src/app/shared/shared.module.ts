import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {DashboardRoutingModule} from '../dashboard/dashboard-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { ChartComponent } from './components/chart/chart.component';



@NgModule({
  declarations: [NavbarComponent, LayoutComponent, MenuComponent, ChartComponent],
  exports: [
    NavbarComponent,
    MenuComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class SharedModule { }
