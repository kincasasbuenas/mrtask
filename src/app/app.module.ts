import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ModalAddTaskPageModule } from './pages/modal-add-task/modal-add-task.module';

import { NativeStorage }  from '@ionic-native/native-storage/ngx';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { UserService } from "../app/services/user/user.service";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    ModalAddTaskPageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
