import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavController,  NavParams } from '@ionic/angular';
import { ModalAddTaskPage } from '../../pages/modal-add-task/modal-add-task.page';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-modal-select-user',
  templateUrl: './modal-select-user.page.html',
  styleUrls: ['./modal-select-user.page.scss'],
})
export class ModalSelectUserPage implements OnInit {

  email_user:string;
  checkBoxUsers:any;
  @Input() email: string;

  constructor(public modalCtrl: ModalController,
              private navCtrl:NavController,
              private navParams:NavParams,
              private _us:UserService) {
                this.email_user=navParams.get('email');
                this._us.getAllUsers().subscribe(data=>{
                  //console.log(data.users);
                  data.users.map(user=>{
                    user.isChecked=false;
                  });

                  this.checkBoxUsers = data.users;
                  this.checkBoxUsers.push({'id':'','email':'','name':'not assigned','lastname':'', 'isChecked': false});
                  this.checkedUser(this.email_user);
                  //console.log('data con email'+this.email_user);
                  //console.log(this.checkBoxUsers);
                })
              }


  checkEvent($e){
    //console.log($e.detail.value);
    this.email_user=$e.detail.value;
    this.closeModal();
  }

  checkedUser(email){
    //console.log('checkando user '+email);
    this.checkBoxUsers.map(obj => {
      if (obj.email == email ){
        obj.isChecked=true;
      }
      if(obj.email == "" && email == 'not assigned'){
        obj.isChecked=true;
      }
    });
  }

  async closeModal() {
    const onClosedData: string = this.email_user;
    await this.modalCtrl.dismiss(onClosedData);
  }



}
