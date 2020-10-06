import { Component, OnInit } from '@angular/core';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: List[] = []
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    // this.listService.getAllLists.subscribe(data => {

    // })
  }

}
