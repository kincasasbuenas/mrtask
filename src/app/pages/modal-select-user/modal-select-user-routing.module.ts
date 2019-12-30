import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSelectUserPage } from './modal-select-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSelectUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSelectUserPageRoutingModule {}
