import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericViewComponent } from './generic-view.component';

const routes: Routes = [{
  path: '',
  component: GenericViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericViewRoutingModule { }
