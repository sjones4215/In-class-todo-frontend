import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ListPageComponent } from '../list-page/list-page.component';
import { Card } from '../models/card';
import { List } from '../models/list';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  listId: number
  newCard: Card = new Card();
  constructor(private cardService: CardService, private route: ActivatedRoute, private dialogRef: MatDialogRef<ListPageComponent>, @Inject(MAT_DIALOG_DATA)data) {
    this.listId = data.id
  }

  ngOnInit(): void {
  }

  addACard() {
    this.newCard.list_id = this.listId
    this.cardService.addCard(this.newCard).subscribe(data => {
      if (data)
      console.log(data)
    })
  }
}
