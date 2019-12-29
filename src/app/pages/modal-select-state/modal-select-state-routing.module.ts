import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSelectStatePage } from './modal-select-state.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSelectStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSelectStatePageRoutingModule {}
