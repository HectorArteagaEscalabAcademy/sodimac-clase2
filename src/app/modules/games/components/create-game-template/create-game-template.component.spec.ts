import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameTemplateComponent } from './create-game-template.component';

describe('CreateGameTemplateComponent', () => {
  let component: CreateGameTemplateComponent;
  let fixture: ComponentFixture<CreateGameTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
