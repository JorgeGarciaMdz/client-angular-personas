import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadModuleRoutingModule } from './ciudad-module-routing.module';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CiudadCreateComponent } from './ciudad-create/ciudad-create.component';


@NgModule({
  declarations: [
    CiudadListComponent,
    CiudadCreateComponent
  ],
  imports: [
    CommonModule,
    CiudadModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CiudadModuleModule { }
