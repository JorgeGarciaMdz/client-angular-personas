import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaModuleRoutingModule } from './persona-module-routing.module';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonaListComponent,
    PersonaCreateComponent
  ],
  imports: [
    CommonModule,
    PersonaModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PersonaModuleModule { }
