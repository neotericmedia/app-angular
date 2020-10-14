import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'someApp';
  name = 'Douglas David Garrigan';

  constructor() {
    console.log('hi');
  }

  submit() {
    console.log('clicked');
  }

  ngOnInit() {
    console.log('hi2');
  }
}
