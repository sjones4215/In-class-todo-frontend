import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  delete = false

  constructor(private route: ActivatedRoute, private listService: ListService,public dialog: MatDialog, private cardService: CardService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
      this.listService.getAList(params.id).subscribe(data => {
        this.list = data
        this.cards = data.cards
        this.sortCards();
      }
    )}
  })
}

  deleteIcons(){
    const cardsToDelete = this.cards.filter(c => c.selected)
      cardsToDelete.forEach(card => {
        this.deleteCard(card.id)
    })
  }

  completeCard() {
    const cardsToComplete = this.cards.filter(c => c.selected)
      cardsToComplete.forEach(card => {
        this.checkComplete(card)
        this.sortCards();
      })
  }

  checkComplete(card: Card) {
    card.completed = !card.completed
    this.cardService.updateCard(card).subscribe(data => {
      if (data)
        console.log(data)
    });
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
    const sortedCards = this.cards.filter(c => c.completed)
       sortedCards.sort( function(x, y) {
         return (x === y)? 0 : x? -1 : 1;
       }
      )}



  deleteCard(id: number) {
    this.cardService.destroyCard(id).subscribe(data => {
      debugger
    })
  }
}

