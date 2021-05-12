import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {
  public username = "Person Persony";
  public email = "adress@email.com"

  constructor() { }

  ngOnInit() {
  }

}
