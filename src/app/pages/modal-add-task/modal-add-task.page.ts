import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { ModalSelectStatePage } from '../../pages/modal-select-state/modal-select-state.page';
import { ModalSelectUserPage } from '../../pages/modal-select-user/modal-select-user.page';


@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.page.html',
  styleUrls: ['./modal-add-task.page.scss'],
})
export class ModalAddTaskPage implements OnInit {

  idState:any;
  email:string='';

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async ModalSelectState() {
    const modal = await this.modalCtrl.create({
      component: ModalSelectStatePage,
      componentProps: {
        'idStatus': this.idState
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.idState = dataReturned.data;
        console.log('Modal Sent Data :'+ this.idState);
      }
    });

    return await modal.present();
  }

  async ModalSelectUser() {
    const modalUser = await this.modalCtrl.create({
      component: ModalSelectUserPage,
      componentProps: {
        'email': this.email
      }
    });

    modalUser.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.email = dataReturned.data;
        console.log('Modal Sent Data User :'+ this.email);
      }
    });

    return await modalUser.present();
  }

}
