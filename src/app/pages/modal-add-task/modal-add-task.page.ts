import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { ModalSelectStatePage } from '../../pages/modal-select-state/modal-select-state.page';


@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.page.html',
  styleUrls: ['./modal-add-task.page.scss'],
})
export class ModalAddTaskPage implements OnInit {

  idState:any;
  constructor(public modalCtrl: ModalController) {

              }

  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async ModalSelectState() {
    const modal = await this.modalCtrl.create({
      component: ModalSelectStatePage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.idState = dataReturned.data;
        console.log('Modal Sent Data :'+ this.idState);
      }
    });

    return await modal.present();
  }

}
