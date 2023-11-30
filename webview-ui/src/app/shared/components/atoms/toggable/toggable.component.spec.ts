import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggableComponent } from './toggable.component';

describe('ToggableComponent', () => {
  let component: ToggableComponent;
  let fixture: ComponentFixture<ToggableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggableComponent]
    });
    fixture = TestBed.createComponent(ToggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
