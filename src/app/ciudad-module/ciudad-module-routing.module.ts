import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadCreateComponent } from './ciudad-create/ciudad-create.component';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';

const routes: Routes = [
  { path: '', component: CiudadListComponent },
  { path: 'create', component: CiudadCreateComponent },
  { path: 'create/:id', component: CiudadCreateComponent },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadModuleRoutingModule { }
