import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'games', loadChildren: () => import('../app/modules/games/games.module').then(m => m.GamesModule)}
  /*{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent  },
  { path: 'games/:id', component: DetailGameComponent },
  { path: 'home', component: HomeComponent },
  { path: 'console', component: ConsoleComponent },
  { path: '**', component: HomeComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
