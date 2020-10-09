import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/list';
import { ListData } from '../models/list-data';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl: string = environment.baseUrl
  currentUser:User

  constructor(private http: HttpClient, private localStroageService: LocalStorageService) {
    this.localStroageService.currentUser.subscribe( data => {
      this.currentUser = data
    })
  }

  getAllLists(): Observable<ListData> {
    return this.http.get<ListData>(this.baseUrl + 'lists/index')
  }

  getAList(id:number): Observable<any> {
    return this.http.get(this.baseUrl + 'lists/show?id=' + id)
  }

  addList(list: List) {
    return this.http.post(this.baseUrl + 'lists/create', list)
  }

  destroyList(id :number): Observable<any>{
    return this.http.delete<any>( this.baseUrl + 'lists/destroy?id=' + id)
  }
}
