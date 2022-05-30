import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public name:string = '';
  public apellido!:string;
  public segundoNombre:string;

  constructor() { 
    this.segundoNombre = 'Antonio';
  }

  ngOnInit(): void {
    //console.log("ngOnInit");
  }

  public cambiarValorPropiedad(){
    this.name = 'dasdasdasd';
  }

  public change(event:Event){
    console.log(event);
  }
}
