import { Injectable } from '@angular/core';
import { URL_API } from "../../config/url.services";
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService} from '../../services/user/user.service';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  results:any;

  constructor(public http: HttpClient,
              private _us:UserService) { }

  addTask(title:string,description:string,status:number,user_email:string){
    this._us.load_storage();

    let data = new HttpParams()
    .append('title', title )
    .append('description', description )
    .append('status', status.toString() )
    .append('user_email', user_email );
    //console.log(data);

    let url = `${ URL_API }/tasks/add_task/${ this._us.token }/${ this._us.userId }`;
    return this.http.post( url, data ).pipe(map(resp=>resp));
  }


  getListTaskByStatus(status:number){
    this._us.load_storage();

    let data = new HttpParams()
    .append('status', status.toString());
    //console.log(data);

    let url = `${ URL_API }/tasks/list_tasks/${ this._us.token }/${ this._us.userId }`;
    return this.http.post( url, data ).pipe(map(resp=>resp));
  }

  search_task( term:string ){
    this._us.load_storage();

    let data = new HttpParams()
    .append('term', term);

    let url = `${ URL_API }/tasks/search/${ this._us.token }/${ this._us.userId }` ;

    this.http.post( url, data ).pipe(map(data=>data))
            .subscribe( resp =>{
              let data = resp;
              this.results = data['tasks'];
              //console.log(this.results);

            });
  }

  getTaskById( id:string ){
    this._us.load_storage();
    let url = `${ URL_API }/tasks/task/${ this._us.token }/${ this._us.userId }/${ id }` ;
    return this.http.get( url ).pipe(map(data=>data));
  }

  UpdateTask(idtask:string,title:string,description:string,status:number,user_email:string){
    this._us.load_storage();

    let data = new HttpParams()
    .append('title', title )
    .append('description', description )
    .append('status', status.toString() )
    .append('user_email', user_email )
    .append('idtask', idtask );
    //console.log(data);

    let url = `${ URL_API }/tasks/update_task/${ this._us.token }/${ this._us.userId }`;
    return this.http.post( url, data ).pipe(map(resp=>resp));
  }
}
