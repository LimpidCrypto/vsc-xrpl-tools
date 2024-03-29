import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { LogoComponent } from './logo/logo.component';
import { NetworkSelectComponent } from './network-select/network-select.component';
import { GenerateFaucetButtonComponent } from './generate-faucet-button/generate-faucet-button.component';



@NgModule({
  declarations: [
    LogoComponent,
    NetworkSelectComponent,
    GenerateFaucetButtonComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ],
  exports: [
    LogoComponent,
    NetworkSelectComponent,
    GenerateFaucetButtonComponent,
  ]
})
export class MoleculesModule { }
