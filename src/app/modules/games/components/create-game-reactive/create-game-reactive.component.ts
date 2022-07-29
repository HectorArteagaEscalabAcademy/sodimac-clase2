import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-game-reactive',
  templateUrl: './create-game-reactive.component.html',
  styleUrls: ['./create-game-reactive.component.css']
})
export class CreateGameReactiveComponent implements OnInit {

  public formTemplateReactive!: FormGroup;
  public formTemplateReactiveControl: FormControl = new FormControl({ value: '', disabled: true},[Validators.required]);

  get cantErrorsMessage(): string {
    const errors = this.formTemplateReactive.get('cant')?.errors;
    

    if (errors?.['required']) {
      return 'Campo es requerido';
    } else if (errors?.['pattern']) {
      return 'Campo solo se permiten caracteres numericos';
    }

    return '';
  }

  get nameGameErrorsMessage(): string {
    const errors = this.formTemplateReactive.get('nameGame')?.errors;

    if (errors?.['required']) {
      return 'Campo es requerido';
    } else if (errors?.['minlength']) {
      return 'La longitud minima longitud es 5';
    } else if (errors?.['maxlength']) {
      return 'La longitud maxima longitud es 5';
    }

    return '';
  }

  get saveChangeErrorsMessage(): string {
    const errors = this.formTemplateReactive.get('saveChange')?.errors;

    if (errors?.['required']) {
      return 'Campo es requerido';
    } 

    return '';
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.onChangeDescription();
  }

  private initForm() {
    this.formTemplateReactive = this.formBuilder.group({
      nameGame: [{ value: 'Mortal Kombat', disabled: true}, [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      cant: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      theme: ['aventuras', [Validators.required]],
      saveChange: [false, [Validators.requiredTrue]],
      platform: ['nintendoSwitch'],
      description: ['']
    })

    this.formTemplateReactive.get('cant')?.disable();
  }

  private onChangeDescription(){
    this.formTemplateReactive.get('description')?.valueChanges.subscribe(search =>{
      console.log(search);
    });
  }

  public dataValidFields(option: string) {
    return this.formTemplateReactive.get(option)?.invalid && this.formTemplateReactive.controls[option].touched;
  }

  public onSubmit(){
    
    const { saveChange } = this.formTemplateReactive.value;
 
    if(!this.formTemplateReactive.valid){
      this.formTemplateReactive.markAllAsTouched();
      console.log("formulario con invalido");
      return;
    }

   /* if(!this.formTemplateReactive.valid){
      console.log("formulario con invalido");
    }else{
      console.log("formulario con valido");
    }*/
    
    console.log("formulario con valido");
    
  }

}
