import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PaginaService } from './services/pagina.service';
import { PersonasComponent } from './components/personas/personas.component';
import { Personas2Component } from './components/personas2/personas2.component';
import { GamesComponent } from './practica/components/games/games.component';
import { CardComponent } from './practica/components/card/card.component';
import { CarritoComponent } from './practica/components/carrito/carrito.component';
import { HomeComponent } from './practica/components/home/home.component';
import { ConsoleComponent } from './practica/components/console/console.component';
import { DetailGameComponent } from './practica/components/detail-game/detail-game.component';
import { NavbarComponent } from './practica/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    Pagina2Component,
    PersonasComponent,
    Personas2Component,
    GamesComponent,
    CardComponent,
    CarritoComponent,
    HomeComponent,
    ConsoleComponent,
    DetailGameComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PaginaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
