import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Card } from '../models/card';
import { List } from '../models/list';
import { ListData } from '../models/list-data';
import { ListService } from '../services/list.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {
  list: List = null
  completed = false
  constructor(private route: ActivatedRoute, private listService: ListService,private messageService: MessengerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
      this.listService.getAList(params.id).subscribe(listData => {
        this.list = listData.list
        console.log(listData)

        })
      }
    })
        this.messageService.onListPage();
        this.messageService.message.getValue();
  }

  ngOnDestroy () {
    this.messageService.message.unsubscribe();
  }

}

