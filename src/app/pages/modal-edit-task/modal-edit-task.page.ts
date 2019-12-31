import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavController,  NavParams,ToastController } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { ModalSelectStatePage } from '../../pages/modal-select-state/modal-select-state.page';
import { ModalSelectUserPage } from '../../pages/modal-select-user/modal-select-user.page';
import { UserService } from '../../services/user/user.service';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-modal-edit-task',
  templateUrl: './modal-edit-task.page.html',
  styleUrls: ['./modal-edit-task.page.scss'],
})
export class ModalEditTaskPage implements OnInit {

  @Input() idTask: string;
  idState:any;
  email:string='';
  name:string='';
  title:string='';
  description:string='';

  constructor(public modalCtrl: ModalController,
              private navCtrl:NavController,
              private navParams:NavParams,
              public toastCtrl: ToastController,
              private _us:UserService,
              private _ts:TaskService) {
                this.idTask=navParams.get('idTask');
                //console.log('modal idtask: '+ this.idTask);
                this._ts.getTaskById(this.idTask).subscribe(data=>{
                    //console.log(data.task);
                    this.idState=data.task.status;
                    this.email = data.task.user_email;
                    if(data.task.name === "" || data.task.name == null){
                      this.name ="not assigned";
                    }else{
                      this.name= data.task.name;
                    }
                    this.description = data.task.description;
                    this.title = data.task.title;
                });
              }

  ngOnInit() {
  }

  editTask(f:NgForm){
    this._ts.UpdateTask(this.idTask,f.value.title_task,f.value.description_task, f.value.status,f.value.user_email).subscribe(resp=>{
      let data_resp=resp;
      if( data_resp['code'] == 200){
          //console.log(data_resp['message']);
          this.presentToastSuccess(data_resp['message']);
        }else{
          //console.log('error creating user');
          this.presentToastSuccess('Error updating task');
        }
    })
  }

  async closeModal() {
    //const onClosedData: string = this.email_user;
    await this.modalCtrl.dismiss();
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
        if(dataReturned.data != '' ){
            this.email = dataReturned.data;
            //console.log('Modal Sent Data User :'+ this.email);
            this._us.getUserByEmail(this.email).subscribe(data=>{
              this.name=data['users'][0].name;
            })
          }else{
            //console.log('entrando return name');
            this.email="not assigned";
            this.name="not assigned";
          }
      }
    });

    return await modalUser.present();
  }


  async presentToastSuccess(message:string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000
    });

    toast.onDidDismiss().then((resolve) => {
      this.closeModal();
    });

    toast.present();
  }

}
