import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { ComponentsModule } from '../shared/components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutsModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class ViewsModule { }
