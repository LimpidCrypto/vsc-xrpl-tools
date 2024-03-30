import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFaucetButtonComponent } from './generate-faucet-button.component';

describe('GenerateFaucetButtonComponent', () => {
  let component: GenerateFaucetButtonComponent;
  let fixture: ComponentFixture<GenerateFaucetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateFaucetButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateFaucetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
