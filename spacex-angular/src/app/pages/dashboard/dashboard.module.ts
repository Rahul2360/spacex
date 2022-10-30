import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TableComponent } from './table/table.component';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableRecordDetailsComponent } from './table-record-details/table-record-details.component';


@NgModule({
  declarations: [
    TableComponent,
    FiltersComponent,
    PaginationComponent,
    DashboardComponent,
    TableRecordDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
