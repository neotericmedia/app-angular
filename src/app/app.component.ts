import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'someApp';
  name: string = '';
  showPocket: boolean = false;
  enableButton: boolean = false;
  serverNme: string = 'Some Server Name';
  logo = 'assets/logo.png';
  test = 'asdf';

  constructor() {
    setTimeout(() => {
      this.enableButton = true;
    }, 500);
  }

  ngOnInit() {}

  handleChange(val: string) {
    this.name = val;
    console.log(val);
  }

  handleClick() {
    this.name = !this.showPocket ? 'Frank Baggins' : 'Sad Wilson';
    setTimeout(() => {
      this.showPocket = !this.showPocket;
      this.serverNme = 'Server has been updated';
    }, 500);
  }

  handleRefClick(val: string) {
    console.log(val);
  }

  // handleInput(e: any) {
  //   this.name = e.target.value;
  //   console.log(e);
  // }

  // handleBlur(e: any) {
  //   this.name = e.target.value;
  //   console.log(e);
  // }
}
