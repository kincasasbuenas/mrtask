import { Injectable } from '@angular/core';
import { URL_API } from "../../config/url.services";
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  AlertController, Platform, NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginPage } from '../../pages/login/login.page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string;
  userId:string;
  listUsers:any[] = [];

  constructor(public http: HttpClient,
              private alertCtrl:AlertController,
              private platform:Platform,
              public navCtrl: NavController,
               private nativeStorage: NativeStorage) {
    this.load_storage();
  }

  login( email:string, password:string ){
    //console.log(correo+ ' '+ contrasena);
    let data = new HttpParams()
    .append('email', email )
    .append('password', password );
    //console.log(data);

    let url = URL_API + "/login";
    return this.http.post( url, data ).pipe(map(resp=>{
      let data_resp = resp;
      //console.log( data_resp );
      if( data_resp['error'] ){
          //console.log(data_resp['message']);
          this.presentAlert(data_resp['message']);
        }else{
          this.token = data_resp['token'];
          this.userId = data_resp['userId'];
          // Guardar Storage
          this.save_storage();
        }
    }));

  }

  private save_storage(){
    if( this.platform.is("cordova") ){
      // dispositivo
      this.nativeStorage.setItem('token', this.token );
      this.nativeStorage.setItem('userId', this.userId );

    }
    else
    {
      // computadora
      if( this.token ){
        localStorage.setItem("token",  this.token  );
        localStorage.setItem("userId",  this.userId  );
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }

    }
  }

  load_storage(){

    let promesa = new Promise( ( resolve, reject )=>{
      if( this.platform.is("cordova") ){
        // dispositivo
        /*this.nativeStorage.ready()
                  .then( ()=>{*/
                  this.nativeStorage.getItem("token")
                          .then( token =>{
                            if( token ){
                              this.token = token;
                            }else{
                              console.log('token does not exist');
                            }
                        })
                  this.nativeStorage.getItem("userId")
                          .then( userId =>{
                            if( userId ){
                              this.userId = userId;
                            }
                        })
              /*})*/
      }else{
        // computadora
        if( localStorage.getItem("token") ){
          //Existe items en el localstorage
          this.token = localStorage.getItem("token");
          this.userId = localStorage.getItem("userId");
        }
        resolve();
      }
    });
    return promesa;
  }

  logout(){

      this.token = null;
      this.userId = null;
      // guardar storage
      this.save_storage();
      this.navCtrl.navigateForward('/login');

    }

  active():boolean{
      if( this.token ){
        return true;
      }else{
        return false;
      }

    }

  getAllUsers(){
    this.load_storage();
    let url = `${ URL_API }/users/list_users/${ this.token }/${ this.userId }`;
    return this.http.get( url ).pipe(map( resp => resp));
  }

  addUser(name:string,lastname:string,email:string){
    this.load_storage();

    let data = new HttpParams()
    .append('name', name )
    .append('lastname', lastname )
    .append('email', email )
    .append('id_admin', this.userId );
    //console.log(data);

    let url = `${ URL_API }/users/add_user/${ this.token }/${ this.userId }`;
    return this.http.post( url, data ).pipe(map(resp=>resp));
  }

  getUserByEmail(email:string){
    this.load_storage();

    let data = new HttpParams()
    .append('email', email );

    let url = `${ URL_API }/users/user_email/${ this.token }/${ this.userId }`;
    return this.http.post( url, data ).pipe(map(resp=>resp));
  }

  async presentAlert(message:string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
