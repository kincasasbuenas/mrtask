import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditTaskPage } from './modal-edit-task.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditTaskPageRoutingModule {}
