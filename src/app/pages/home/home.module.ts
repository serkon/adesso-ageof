import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmptyResultModule } from '@src/app/components/empty-result/empty-result.module';
import { SharedModule } from '@src/app/shared.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

const Modules = [EmptyResultModule];

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, FormsModule, Modules],
})
export class HomeModule {}
