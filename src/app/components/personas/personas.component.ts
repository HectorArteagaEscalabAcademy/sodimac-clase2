import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, AfterViewInit {

  public name: string = '';
  public apellido!: string;
  public segundoNombre: string;

  @ViewChild('test') test!:ElementRef<HTMLInputElement>;
  @ViewChild('elementSelect') elementSelect!:ElementRef<HTMLInputElement>;

  constructor() {
    this.segundoNombre = 'Antonio';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.test.nativeElement.focus();
      this.test.nativeElement.value = "hector";
      this.test.nativeElement.style.backgroundColor = "red";
      this.elementSelect.nativeElement.value = "2";
  }

  public cambiarValorPropiedad() {
    this.name = 'dasdasdasd';
  }

  public change(event: Event) {
    console.log(event);
  }
}
