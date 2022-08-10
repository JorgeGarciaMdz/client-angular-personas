import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
import { PersonaListComponent } from './persona-list/persona-list.component';

const routes: Routes = [
  { path: '', component: PersonaListComponent },
  { path: 'create', component: PersonaCreateComponent },
  { path: 'create/:id', component: PersonaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaModuleRoutingModule { }
