import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinciaModuleRoutingModule } from './provincia-module-routing.module';
import { ProvinciaComponent } from './provincia-list/provincia.component';
import { ProvinciaCreateComponent } from './provincia-create/provincia-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProvinciaComponent,
    ProvinciaCreateComponent
  ],
  imports: [
    CommonModule,
    ProvinciaModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProvinciaComponent
  ]
})
export class ProvinciaModuleModule { }
