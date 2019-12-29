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
              console.log(this.results);

            });

  }
}
