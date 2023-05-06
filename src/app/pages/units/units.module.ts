import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from './units-routing.module';

@NgModule({
  declarations: [UnitsComponent],
  imports: [CommonModule, UnitsRoutingModule, FormsModule],
  exports: [UnitsComponent],
})
export class UnitsModule {}
