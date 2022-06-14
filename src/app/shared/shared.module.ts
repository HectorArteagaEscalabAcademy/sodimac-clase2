import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PersonasComponent } from './components/personas/personas.component';
import { Personas2Component } from './components/personas2/personas2.component';

@NgModule({
  declarations: [
    NavbarComponent,
    Pagina2Component,
    PersonasComponent,
    Personas2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    Pagina2Component,
    PersonasComponent,
    Personas2Component,
    NavbarComponent
  ]
})
export class SharedModule { }
