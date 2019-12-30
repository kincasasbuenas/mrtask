import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSelectUserPageRoutingModule } from './modal-select-user-routing.module';

import { ModalSelectUserPage } from './modal-select-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelectUserPageRoutingModule
  ],
  declarations: [ModalSelectUserPage]
})
export class ModalSelectUserPageModule {}
