import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from './molecules/molecules.module';
import { AtomsModule } from './atoms/atoms.module';
import { OrganismsModule } from './organisms/organisms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ]
})
export class ComponentsModule { }
