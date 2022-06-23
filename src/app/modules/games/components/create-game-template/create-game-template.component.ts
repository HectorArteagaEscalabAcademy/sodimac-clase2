import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-game-template',
  templateUrl: './create-game-template.component.html',
  styleUrls: ['./create-game-template.component.css']
})
export class CreateGameTemplateComponent implements OnInit {

  @ViewChild('formTemplate') formTemplate!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    console.log(this.formTemplate);
  }

  public validatedCantGameRequired(): boolean{
   return this.formTemplate?.controls['cantGame']?.invalid && 
          this.formTemplate?.controls['cantGame']?.touched;
  }

  public validatedCantGamePositive(): boolean{
    return this.formTemplate?.controls['cantGame']?.value < 0 &&
           this.formTemplate?.controls['cantGame']?.touched;
   }

   public validatedFields(name:string): boolean{
    return this.formTemplate?.controls[name]?.invalid &&
           this.formTemplate?.controls[`${name}`]?.touched;
   }

}
