import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TextDiagnoseComponent } from './text-diagnose/text-diagnose.component';
import { SearchedDataComponent } from './searched-data/searched-data.component';


@NgModule({
  declarations: [GenericViewComponent, TextDiagnoseComponent, SearchedDataComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
  ]
})
export class GenericViewModule { }
