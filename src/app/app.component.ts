import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
import { List } from './models/list';
import { ListService } from './services/list.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'in-class-todo-list-frontend';
  opened = true
  lists: List[] = []
  signedIn = false
  completed = false
  constructor (public dialog: MatDialog, private listService: ListService, private router: Router, private localStorageService: LocalStorageService) {}

  ngOnInit () {
    this.retreiveAllLists();

    this.localStorageService.currentUser.subscribe(data => {
      if (data) {
        this.signedIn = true
      } else {
        this.signedIn = false
      }
    })
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

    listProfile(lists: List) {
      this.router.navigate(['listprofile/', lists.id])
    }




}
