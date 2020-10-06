import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/list';
import { ListData } from '../models/listData';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getAllLists(): Observable<ListData> {
    return this.http.get<ListData>(this.baseUrl + 'lists/index')
  }

  getAList() {

  }
}
