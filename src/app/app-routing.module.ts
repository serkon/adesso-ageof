import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule) },
  { path: 'units', loadChildren: () => import('./pages/units/units.module').then((m) => m.UnitsModule) },
  { path: 'detail', loadChildren: () => import('./pages/detail/detail.module').then((m) => m.DetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
