import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciaCreateComponent } from './provincia-create/provincia-create.component';
import { ProvinciaComponent } from './provincia-list/provincia.component';

const routes: Routes = [
  { path: '', component: ProvinciaComponent },
  { path: 'create', component: ProvinciaCreateComponent},
  { path: 'create/:id', component: ProvinciaCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinciaModuleRoutingModule { }
