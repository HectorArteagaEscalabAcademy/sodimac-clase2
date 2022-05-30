import { Injectable } from '@angular/core';

@Injectable()

export class PaginaService {

  constructor() { }

  public getPagina(){
    console.log('getPagina');
    return 'getPagina';
  }

  public addPagina(){
    console.log('addPagina');
    return 'addPagina';
  }

  public editPagina(){
    console.log('editPagina');
    return 'editPagina';
  }

  public deletePagina(){
    console.log('deletePagina');
    return 'deletePagina';
  }

}
