import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-d',
    loadChildren: () => import('./pages/inicio-d/inicio-d.module').then( m => m.Inicio_dPageModule)
  },
  {
    path: 'pagina-d',
    loadChildren: () => import('./pages/pagina-d/pagina-d.module').then( m => m.PaginaDPageModule)
  },
  {
    path: 'inicio-a',
    loadChildren: () => import('./pages/inicio-a/inicio-a.module').then( m => m.InicioAPageModule)
  },
  {
    path: 'pagina-a',
    loadChildren: () => import('./pages/pagina-a/pagina-a.module').then( m => m.PaginaAPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
