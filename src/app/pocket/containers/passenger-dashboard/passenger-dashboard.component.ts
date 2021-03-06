import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

import { PassenderDashboardService } from './../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  template: `
    <passenger-count [items]="passengers"></passenger-count>

    <passenger-details
      *ngFor="let passenger of passengers"
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)"
    ></passenger-details>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passenderService: PassenderDashboardService) {}

  ngOnInit() {
    this.passengers = this.passenderService.getPassengers();
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.passengers);
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter(
      (somePassenger: Passenger) => somePassenger.id !== event.id
    );
  }
}

// passengers: Passenger[] = [
//   {
//     id: 1,
//     fullName: 'Stephen',
//     checkedIn: true,
//     checkInDate: 1490742000000,
//     children: null,
//   },
//   {
//     id: 2,
//     fullName: 'Rose',
//     checkedIn: false,
//     checkInDate: null,
//     children: [
//       { name: 'Ted', age: 12 },
//       { name: 'Chloe', age: 7 },
//     ],
//   },
//   {
//     id: 3,
//     fullName: 'James',
//     checkedIn: true,
//     checkInDate: 1491606000000,
//   },
//   {
//     id: 4,
//     fullName: 'Louise',
//     checkedIn: true,
//     checkInDate: 1488412800000,
//     children: [{ name: 'Jessica', age: 1 }],
//   },
//   {
//     id: 5,
//     fullName: 'Tina',
//     checkedIn: false,
//     checkInDate: null,
//     children: null,
//   },
// ];
