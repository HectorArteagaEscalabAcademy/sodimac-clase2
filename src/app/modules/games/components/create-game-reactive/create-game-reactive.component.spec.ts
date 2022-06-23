import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameReactiveComponent } from './create-game-reactive.component';

describe('CreateGameReactiveComponent', () => {
  let component: CreateGameReactiveComponent;
  let fixture: ComponentFixture<CreateGameReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
