import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListComponent } from '../add-list/add-list.component';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened = false
  lists: List[] = []
  constructor(private listService: ListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.retreiveAllLists();
  }

  retreiveAllLists() {
    this.listService.getAllLists().subscribe(data => {
      if (data)
        this.lists = data.lists
        console.log(data)
      })
    }


    openDialog() {
      const dialogRef = this.dialog.open(AddListComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    deleteList(id:number) {
      this.listService.destroyList(id).subscribe(data => {
        if (data) {
        return data
      }
    })
  }

  listProfile(id:number) {
    this.listService.getAList(id).subscribe(data => {
      if (data) {
        return data
      }
    })
  }
}
