import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MessengerService } from '../services/messenger.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signedIn = false
  onPage = false
  nickname = '';

  constructor(private localStorageService: LocalStorageService, private router: Router, private messengerService: MessengerService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
      if (data) {
        this.signedIn = true
        this.nickname = data.nickname
      } else {
        this.signedIn = false
      }
    })

    this.messengerService.message.subscribe(data => {
      if (data) {
        this.onPage = true
      } else {
        this.onPage = false
      }
    })
  }

  logOut() {
    this.localStorageService.logoutUser()
  }

  onListPage() {
    this.messengerService.message.getValue()
  }

  openDialogSignIn () {
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialogSignUp () {
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
