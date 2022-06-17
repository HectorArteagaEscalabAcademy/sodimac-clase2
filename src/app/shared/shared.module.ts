import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PersonasComponent } from './components/personas/personas.component';
import { Personas2Component } from './components/personas2/personas2.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-no-found/page-not-found.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    Pagina2Component,
    PersonasComponent,
    Personas2Component,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    Pagina2Component,
    PersonasComponent,
    Personas2Component,
    NavbarComponent,
    MenuComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
