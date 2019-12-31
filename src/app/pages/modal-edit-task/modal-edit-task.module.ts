import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditTaskPageRoutingModule } from './modal-edit-task-routing.module';

import { ModalEditTaskPage } from './modal-edit-task.page';
import { ModalSelectStatePageModule } from '../../pages/modal-select-state/modal-select-state.module';
import { ModalSelectUserPageModule } from '../../pages/modal-select-user/modal-select-user.module';
import { SharedpipesModule } from '../../pipes/sharedpipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelectStatePageModule,
    ModalSelectUserPageModule,
    SharedpipesModule,
    ModalEditTaskPageRoutingModule
  ],
  declarations: [ModalEditTaskPage]
})
export class ModalEditTaskPageModule {}
