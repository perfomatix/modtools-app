import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule } from '@angular/forms';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TextDiagnoseComponent } from './text-diagnose/text-diagnose.component';
import { SearchedDataComponent } from './searched-data/searched-data.component';
import { AiPredictionPercentageComponent } from './ai-prediction-percentage/ai-prediction-percentage.component';


@NgModule({
  declarations: [GenericViewComponent, TextDiagnoseComponent, SearchedDataComponent, AiPredictionPercentageComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    FormsModule
  ]
})
export class GenericViewModule { }
