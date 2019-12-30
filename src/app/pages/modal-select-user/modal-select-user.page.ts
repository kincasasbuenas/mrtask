import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavController,  NavParams } from '@ionic/angular';
import { ModalAddTaskPage } from '../../pages/modal-add-task/modal-add-task.page';

@Component({
  selector: 'app-modal-select-user',
  templateUrl: './modal-select-user.page.html',
  styleUrls: ['./modal-select-user.page.scss'],
})
export class ModalSelectUserPage implements OnInit {

  email_user:string;
  @Input() email: string;

  constructor(public modalCtrl: ModalController,
              private navCtrl:NavController,
              private navParams:NavParams) {
                this.email_user=navParams.get('email');
              }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: string = this.email_user;
    await this.modalCtrl.dismiss(onClosedData);
  }

}
