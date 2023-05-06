import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmptyResultComponent } from './empty-result.component';
import { EmptyResultRoutingModule } from './empty-result-routing.module';

@NgModule({
  declarations: [EmptyResultComponent],
  imports: [CommonModule, EmptyResultRoutingModule],
  exports: [EmptyResultComponent],
})
export class EmptyResultModule {}
