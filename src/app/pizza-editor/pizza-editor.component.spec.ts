import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaEditorComponent } from './pizza-editor.component';

describe('PizzaEditorComponent', () => {
  let component: PizzaEditorComponent;
  let fixture: ComponentFixture<PizzaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
