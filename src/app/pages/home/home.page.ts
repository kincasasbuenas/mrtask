import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TaskService } from '../../services/task/task.service';
import { ModalController } from '@ionic/angular';
import { ModalAddTaskPage } from '../../pages/modal-add-task/modal-add-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status:string = "open";
  tasksOpen:any;
  tasksProgress:any;
  tasksComplete:any;
  tasksFiled:any;

  constructor(private _us:UserService,
              private _ts:TaskService,
              public modalCtrl: ModalController) {
    if(!this._us.active()){
      this._us.logout();
    }
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
    return await modal.present();
  }

  search_task(event: any){
    let str = event.target.value;
    console.log(str);
    this._ts.search_task( str );
  }

}
