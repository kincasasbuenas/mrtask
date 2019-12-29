import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { HomePage } from '../../pages/home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuario:Object={
   email:'',
   password:'',
 };

  constructor(public navCtrl: NavController,
              private _us: UserService) { }

  ngOnInit() {
  }

  login(f:NgForm){
    this.usuario.email=f.value.email;
    this.usuario.password=f.value.password;

    this._us.login(this.usuario.email,this.usuario.password).subscribe( () =>{
       if( this._us.active() ){
        this.navCtrl.navigateForward('/home');
      }
    });
  }

}
