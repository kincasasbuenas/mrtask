import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddTaskPageRoutingModule } from './modal-add-task-routing.module';

import { ModalAddTaskPage } from './modal-add-task.page';
import { ModalSelectStatePageModule } from '../../pages/modal-select-state/modal-select-state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddTaskPageRoutingModule,
    ModalSelectStatePageModule
  ],
  declarations: [ModalAddTaskPage]
})
export class ModalAddTaskPageModule {}
