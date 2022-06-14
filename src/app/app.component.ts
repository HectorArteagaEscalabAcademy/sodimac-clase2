import { Component } from '@angular/core';
import { persona } from './interfaces/pagina2.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'clase2';

  public parentMessage: string = 'Estoy enviando información del componente padre al hijo';
  public parentMessageTwo: number = 5;

  public parentObject: Object = {
    id: 1,
    name: 'pedro',
    apellido: 'zambrano'
  }

  constructor() {
  }

  sendFather($event: string) {
    console.log($event);
  }

  secondFather(option: number) {
    console.log(option);
  }
  
  objectFather(option:Object){
    console.log(option);
  }

  objectInterfaceFather(option:persona){
    const { apellido, edad, id } = option;
    console.log( "params", apellido, edad, id);
  }
  
}
