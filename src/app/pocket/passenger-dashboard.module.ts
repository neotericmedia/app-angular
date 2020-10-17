import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-details.component';

// services
import { PassenderDashboardService } from './services/passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
  providers: [PassenderDashboardService],
})
export class PassengerDashboardModule {}
