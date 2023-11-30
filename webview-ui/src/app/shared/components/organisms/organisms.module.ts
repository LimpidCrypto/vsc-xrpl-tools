import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { CoreModule } from './core/core.module';
import { AtomsModule } from '../atoms/atoms.module';
import { FaucetWalletButtonComponent } from './faucet-wallet-button/faucet-wallet-button.component';



@NgModule({
  declarations: [
    FaucetWalletButtonComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    CoreModule,
  ],
  exports: [
    CoreModule,
    FaucetWalletButtonComponent,
  ]
})
export class OrganismsModule { }
