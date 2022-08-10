import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'provincia',
  loadChildren: () => import('./provincia-module/provincia-module.module')
  .then(m => m.ProvinciaModuleModule)
  },
  {
    path: 'ciudad',
    loadChildren: () => import('./ciudad-module/ciudad-module.module')
    .then( m => m.CiudadModuleModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona-module/persona-module.module')
    .then( p => p.PersonaModuleModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
