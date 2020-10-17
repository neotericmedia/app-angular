import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <h2>
      Totel number of checked-in: {{ checkedInCount() }} / {{ items.length }}
    </h2>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((somePerson: Passenger) => somePerson.checkedIn)
      .length;
  }
}
