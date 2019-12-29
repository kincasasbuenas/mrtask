import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddTaskPage } from './modal-add-task.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddTaskPageRoutingModule {}
