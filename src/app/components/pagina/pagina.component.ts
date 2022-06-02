import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})

export class PaginaComponent implements OnInit {

  @Input() primeraVariable: string = '';
  @Input() segundaVariable: number = 0;

  public message: string = 'esta variable va a hacer enviada al componente padre';

  @Output() messageEvent = new EventEmitter<string>();
  @Output() secondEvent = new  EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.primeraVariable);
    console.log(this.segundaVariable);
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  sendSecondMessage(option:number){
    this.secondEvent.emit(option);
  }

}