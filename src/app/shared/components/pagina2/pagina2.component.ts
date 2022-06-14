import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { persona } from 'src/app/interfaces/pagina2.interface';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  @Input() childObject:Object = {};

  @Output() fatherObject = new EventEmitter<Object>();
  @Output() fatherInterfaceObject = new EventEmitter<persona>();

  constructor() { }

  ngOnInit(): void {
    this.fatherFuctionObject();
    this.fatherInterfaceFunctionObject();
  }

  public fatherFuctionObject(){

    const params = {
      id: 9,
      name: "manuel",
      apellido: "mendoza"
    }

    this.fatherObject.emit(params);

  }

  public fatherInterfaceFunctionObject(){

    const params:persona = {
      id: 5,
      name: "pablo",
      apellido: "alboran",
      edad: 5
    }

    this.fatherInterfaceObject.emit(params);

  }

}
