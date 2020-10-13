import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddListComponent } from '../add-list/add-list.component';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  opened: boolean;


  constructor(public dialog: MatDialog, private router: Router, private listService: ListService) {}

  ngOnInit(): void {
  }






}
