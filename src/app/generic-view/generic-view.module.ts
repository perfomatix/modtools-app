import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [GenericViewComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
  ]
})
export class GenericViewModule { }
