import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { CoreModule } from './core/core.module';
import { AtomsModule } from '../atoms/atoms.module';
import { WalletTileComponent } from './wallet-tile/wallet-tile.component';



@NgModule({
  declarations: [
    WalletTileComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    CoreModule,
  ],
  exports: [
    CoreModule,
    WalletTileComponent,
  ]
})
export class OrganismsModule { }
