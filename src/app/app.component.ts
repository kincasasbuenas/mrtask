import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {UserService} from './services/user/user.service';
import {HomePage} from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl:NavController,
    private _us:UserService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu(){
    this.pages = [
      {
        title : "Task",
        url   : "/home",
        icon  : "clipboard"
      },
      {
        title : "Users",
        url   : "/users",
        icon  : "people"
      },
    ];
  }

  logout(){
    this._us.logout();
  }
}
