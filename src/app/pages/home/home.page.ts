import { Component,OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TaskService } from '../../services/task/task.service';
import { ModalController } from '@ionic/angular';
import { ModalAddTaskPage } from '../../pages/modal-add-task/modal-add-task.page';
import { ModalEditTaskPage } from '../../pages/modal-edit-task/modal-edit-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  status:string = "open";
  tasksOpen:any;
  tasksProgress:any;
  tasksComplete:any;
  tasksFiled:any;
  color:string='primary';

  constructor(private _us:UserService,
              private _ts:TaskService,
              public modalCtrl: ModalController) {
    if(!this._us.active()){
      this._us.logout();
    }
    this.listAllTask();

  }


  listAllTask(){
    this._ts.getListTaskByStatus(1).subscribe(data=>{
       this.tasksOpen = data['tasks'];
    });

    this._ts.getListTaskByStatus(2).subscribe(data=>{
       this.tasksProgress = data['tasks'];
    });

    this._ts.getListTaskByStatus(3).subscribe(data=>{
       this.tasksComplete = data['tasks'];
    });

    this._ts.getListTaskByStatus(4).subscribe(data=>{
       this.tasksFiled = data['tasks'];
    });
  }

  async ModalAddTask() {
    const modal = await this.modalCtrl.create({
      component: ModalAddTaskPage
    });

    modal.onDidDismiss().then(() => {
        this.listAllTask();
        console.log('update tasks');
    });
    return await modal.present();
  }

  search_task(event: any){
    let str = event.target.value;
    console.log(str);
    this._ts.search_task( str );
  }

  async updateTask(id){
    //console.log('id task to update '+ id);
    const modal = await this.modalCtrl.create({
      component: ModalEditTaskPage,
      componentProps: {
        'idTask': id
      }
    });

    modal.onDidDismiss().then(() => {
      this.listAllTask();
    });

    return await modal.present();
  }

  eventColor($e){
    //console.log($e);
    if($e.detail.value=="open"){
      this.color="primary";
    }else if($e.detail.value=="progress"){
      this.color="warning";
    }else if($e.detail.value=="complete"){
      this.color="success";
    }else if($e.detail.value=="filed"){
      this.color="medium";
    }else if($e.detail.value=="search"){
      this.color="tertiary";
    }
  }

}
