import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error-404.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error404RoutingModule { }
