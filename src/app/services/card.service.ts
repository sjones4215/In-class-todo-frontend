import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  addCard(card: Card) {
    debugger
   return this.http.post(this.baseUrl + 'cards/create', card);
  }

  destroyCard(id: number) {
    return this.http.delete( this.baseUrl + 'cards/destroy?id=' + id)
  }
}
