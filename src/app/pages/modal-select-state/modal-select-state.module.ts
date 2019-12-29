import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSelectStatePageRoutingModule } from './modal-select-state-routing.module';

import { ModalSelectStatePage } from './modal-select-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelectStatePageRoutingModule
  ],
  declarations: [ModalSelectStatePage]
})
export class ModalSelectStatePageModule {}
