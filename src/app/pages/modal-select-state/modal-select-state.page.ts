import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavController,  NavParams } from '@ionic/angular';
import { ModalAddTaskPage } from '../../pages/modal-add-task/modal-add-task.page';


@Component({
  selector: 'app-modal-select-state',
  templateUrl: './modal-select-state.page.html',
  styleUrls: ['./modal-select-state.page.scss'],
})
export class ModalSelectStatePage implements OnInit {

  checkBoxStates:any;
  idState:any;

  @Input() idStatus: number;

  constructor(public modalCtrl: ModalController,
              private navCtrl:NavController,
              private navParams:NavParams) {

    this.checkBoxStates = [
      {
        name:"Open",
        isChecked:false,
        idState:1
      },{
        name:"In progress",
        isChecked:false,
        idState:2
      },{
        name:"Complete",
        isChecked:false,
        idState:3
      },{
        name:"Failed",
        isChecked:false,
        idState:4
      }
    ];

    //console.log('estado enviado '+ navParams.get('idStatus'));
    this.idState=navParams.get('idStatus');
    this.checkedState(navParams.get('idStatus'));

  }

  ngOnInit() {

  }

  checkEvent($e){
    //console.log($e.detail.value);
    this.idState=$e.detail.value;
    this.closeModal();
  }

  async closeModal() {
    const onClosedData: number = this.idState;
    await this.modalCtrl.dismiss(onClosedData);
  }

  checkedState(id){
    this.checkBoxStates.map(obj => {
      if (obj.idState == id){
        obj.isChecked=true;
      }
    });
  }

}
