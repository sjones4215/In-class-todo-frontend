import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AddCardComponent } from '../add-card/add-card.component';
import { Card } from '../models/card';
import { List } from '../models/list';
import { ListData } from '../models/list-data';
import { CardService } from '../services/card.service';
import { ListService } from '../services/list.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  list: List
  cards: Card[] = []
  completed = false
  delete = false
  constructor(private route: ActivatedRoute, private listService: ListService,public dialog: MatDialog, private cardService: CardService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
      this.listService.getAList(params.id).subscribe(data => {
        this.list = data
        this.cards = data.cards
        console.log(data);

        this.cards.sort((a, b) => {
          if (a.completed === b.completed) {
             return 0;
          }

          if (a.completed) {
             return -1;
          }

          if (b.completed) {
             return 1;
          }
        });

        })
      }
    });
  }

  deleteIcons(){
    this.delete = !this.delete
  }

  completeCard() {
    this.completed = !this.completed
    this.sortCards();
  }

  openDialogCard() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: this.list.id
    }

    const dialogRef = this.dialog.open(AddCardComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  sortCards() {
    this.cards.sort((a, b) => {
      if (a.completed === b.completed) {
         return 0;
      }

      if (a.completed) {
         return -1;
      }

      if (b.completed) {
         return 1;
      }
    });
  }

  deleteCard(id: number) {
    this.cardService.destroyCard(id).subscribe(data => {
      debugger
    })
  }
}

