import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home/dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {

}
