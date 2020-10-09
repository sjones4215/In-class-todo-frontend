import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../models/list';
import { ListService } from '../services/list.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  newList: List = new List();
  constructor(private route: ActivatedRoute, private listService: ListService, private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }


  addNewList() {
    this.listService.addList(this.newList).subscribe(data => {
      if (data)
        this.ngOnInit();

    })
  }
}
