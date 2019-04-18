import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: 'league/:sportName/:countryName/:leagueName',
    component: GridComponent
  }
  // ,
  // {
  //   path: '', //redirect
  //   pathMatch: 'full',
  //   component: GridComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
