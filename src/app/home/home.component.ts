import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddListComponent } from '../add-list/add-list.component';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened = true
  lists: List[] = []

  constructor(private listService: ListService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.retreiveAllLists();
    // this.lists.sort((a, b) => {
    //   if (a.completed === b.completed) {
    //      return 0;
    //   }

    //   if (a.completed) {
    //      return -1;
    //   }

    //   if (b.completed) {
    //      return 1;
    //   }
    // });
  }

  retreiveAllLists() {
    this.listService.getAllLists().subscribe(data => {
      if (data)
        this.lists = data.lists.map(x => Object.assign(new List(), x))
        console.log(data)
      })
    }



    deleteList(id:number) {
      this.listService.destroyList(id).subscribe(data => {
        if (data) {
          return data
      }
    })
  }

  sortList() {
    // this.lists.sort((a, b) => {
    //   if (a.completed === b.completed) {
    //      return 0;
    //   }

    //   if (b.completed) {
    //      return -1;
    //   }

    //   if (a.completed) {
    //      return 1;
    //   }
    // })
  }

  listProfile(lists: List) {
    this.router.navigate(['listprofile/', lists.id])
  }


}


