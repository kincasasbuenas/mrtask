import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ModalController } from '@ionic/angular';
import { ModalAddUserPage } from '../../pages/modal-add-user/modal-add-user.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  listUser:any;
  constructor(private _us:UserService,
              public modalCtrl: ModalController) {
              this.getListAllUsers();

  }

  ngOnInit() {
  }

  getListAllUsers(){
    this._us.getAllUsers().subscribe( data =>{
        if( data['error'] ){
          // manejar el error
        }else{
          this.listUser = data['users'];
          //console.log(this.listUser);
        }
    });
  }



  async presentModalAddUser() {
    const modal = await this.modalCtrl.create({
      component: ModalAddUserPage
    });
    modal.onDidDismiss().then(() => {
        this.getListAllUsers();
        //console.log('update users');
    });

    return await modal.present();
  }

}
