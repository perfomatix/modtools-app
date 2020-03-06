import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';


@NgModule({
  declarations: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
  ]
})
export class SharedComponentsModule { }
