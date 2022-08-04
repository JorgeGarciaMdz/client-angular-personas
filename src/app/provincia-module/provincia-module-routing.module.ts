import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciaComponent } from './provincia/provincia.component';

const routes: Routes = [
  { path: '', component: ProvinciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinciaModuleRoutingModule { }
