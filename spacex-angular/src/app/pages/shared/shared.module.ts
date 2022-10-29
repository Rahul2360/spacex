import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [components]
})
export class SharedModule { }
