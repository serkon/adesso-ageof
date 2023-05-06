import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyResultComponent } from './empty-result.component';

const routes: Routes = [{ path: '', component: EmptyResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyResultRoutingModule {}
