import { Component } from '@angular/core';
import { PaginaService } from './services/pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase2';

  constructor(private readonly paginaService:PaginaService){
    this.paginaService.getPagina();
    this.paginaService.addPagina();
    this.paginaService.editPagina();
    this.paginaService.deletePagina();
  }

}
