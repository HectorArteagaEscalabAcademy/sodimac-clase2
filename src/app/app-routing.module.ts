import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from './shared/guards/auth0.guard';

const routes: Routes = [
  
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)},
  { path: 'games', canActivate:[Auth0Guard], canLoad: [ Auth0Guard ] ,loadChildren: () => import('../app/modules/games/games.module').then(m => m.GamesModule) },
  { path: 'countries', canActivate:[Auth0Guard], canLoad: [ Auth0Guard ], loadChildren: () => import('../app/modules/countries/countries.module').then(m => m.CountriesModule)},
  { path: '404', loadChildren: () => import('../app/modules/errors/error-404/error-404.module').then(m => m.Error404Module)},
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
