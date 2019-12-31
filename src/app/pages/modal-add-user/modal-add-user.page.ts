import { Component, OnInit } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.page.html',
  styleUrls: ['./modal-add-user.page.scss'],
})
export class ModalAddUserPage implements OnInit {

  private user:Object={
     name:'',
     lastname:'',
     email:''
   }

  constructor(public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              private _us:UserService) { }

  ngOnInit() {
  }

  addUser(f:NgForm){
    this.user.name=f.value.name;
    this.user.lastname=f.value.lastname;
    this.user.email=f.value.email;

    this._us.addUser(this.user.name,this.user.lastname,this.user.email).subscribe(data =>{
      let data_resp=data;
      if( data_resp['code'] == 200){
          //console.log(data_resp['message']);
          this.presentToastSuccess(data_resp['message']);
        }else{
          //console.log('error creating user');
        }
    })
  }

  closed(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentToastSuccess(message:string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000
    });

    toast.onDidDismiss().then((resolve) => {
      this.closed();
    });

    toast.present();
  }

}
