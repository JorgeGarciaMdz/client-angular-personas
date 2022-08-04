import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinciaModuleRoutingModule } from './provincia-module-routing.module';
import { ProvinciaComponent } from './provincia/provincia.component';


@NgModule({
  declarations: [
    ProvinciaComponent
  ],
  imports: [
    CommonModule,
    ProvinciaModuleRoutingModule
  ],
  exports:[
    ProvinciaComponent
  ]
})
export class ProvinciaModuleModule { }
