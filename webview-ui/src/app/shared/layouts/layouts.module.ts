import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { OrganismsModule } from '../components/organisms/organisms.module';



@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ],
  exports: [
    MasterComponent
  ],
})
export class LayoutsModule { }
