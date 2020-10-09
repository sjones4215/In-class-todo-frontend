import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Card } from '../models/card';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  list: List = null
  cards: Card[] = []
  constructor(private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
      this.listService.getAList(params.id).subscribe(value => {
        this.list = value.list
        this.cards = value.cards
        console.log(value)

        })
      }
    })
  }

}
