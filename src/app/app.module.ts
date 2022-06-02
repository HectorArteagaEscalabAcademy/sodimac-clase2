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

//import { Personas2Component } from '@components/personas2/personas2.component'; -- ALIAS - PATH

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    Pagina2Component,
    PersonasComponent,
    Personas2Component,
    GamesComponent,
    CardComponent,
    CarritoComponent
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
