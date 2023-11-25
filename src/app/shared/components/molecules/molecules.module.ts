import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    LogoComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ],
  exports: [
    LogoComponent,
  ]
})
export class MoleculesModule { }
