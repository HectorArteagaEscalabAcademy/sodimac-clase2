import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game-reactive',
  templateUrl: './create-game-reactive.component.html',
  styleUrls: ['./create-game-reactive.component.css']
})
export class CreateGameReactiveComponent implements OnInit {

  public formTemplateReactive!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
      this.formTemplateReactive = this.formBuilder.group({
        nameGame: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
        theme: ['aventuras'],
        platform: ['nintendoSwitch'],
        description: ['']
      })
  }

}
