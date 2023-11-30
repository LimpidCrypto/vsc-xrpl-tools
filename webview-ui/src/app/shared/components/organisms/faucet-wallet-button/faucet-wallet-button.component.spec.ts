import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaucetWalletButtonComponent } from './faucet-wallet-button.component';

describe('FaucetWalletButtonComponent', () => {
  let component: FaucetWalletButtonComponent;
  let fixture: ComponentFixture<FaucetWalletButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaucetWalletButtonComponent]
    });
    fixture = TestBed.createComponent(FaucetWalletButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
