import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'games', loadChildren: () => import('../app/modules/games/games.module').then(m => m.GamesModule) },
  { path: 'countries', loadChildren: () => import('../app/modules/countries/countries.module').then(m => m.CountriesModule)},
  { path: '404', loadChildren: () => import('../app/modules/errors/error-404/error-404.module').then(m => m.Error404Module)},
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
