import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signedIn = false
  nickname = '';
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
      if (data) {
        this.signedIn = true
        this.nickname = data.nickname
      } else {
        this.signedIn = false
      }
    })
  }

}
