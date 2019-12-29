import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import { ModalAddUserPageModule } from '../../pages/modal-add-user/modal-add-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    ModalAddUserPageModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
