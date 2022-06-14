import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './practica/components/games/games.component';
import { HomeComponent } from './practica/components/home/home.component';
import { ConsoleComponent } from './practica/components/console/console.component';
import { DetailGameComponent } from './practica/components/detail-game/detail-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent  },
  { path: 'games/:id', component: DetailGameComponent },
  { path: 'home', component: HomeComponent },
  { path: 'console', component: ConsoleComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
