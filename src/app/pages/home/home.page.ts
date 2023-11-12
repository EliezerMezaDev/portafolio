import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  navCurrent: String = '';

  constructor() {}

  ngOnInit() {}

  changeNavCurrent(_nav: String){
    this.navCurrent = _nav
  }
}
