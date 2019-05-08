import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../common/modules/matmodule/matmodule';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list/rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { RentalDetailCalendarComponent } from './rental-detail/rental-detail-calendar/rental-detail-calendar.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalDetailUpdateComponent } from './rental-detail/rental-detail-update/rental-detail-update.component';


import { GoogleMapsModule } from '../common/components/googlemaps/googlemaps.module';


import { EditableModule } from '../common/components/editable/editable.module';
import { BookingWithTimeComponent } from './rental-detail/rental-detail-booking/booking-with-time/booking-with-time';
import { BookingWithTimeWizardComponent } from './rental-detail/rental-detail-booking/booking-with-time/booking-with-time-wizard/booking-with-time-wizard.component';
import { BottomNavbarComponent } from '../common/bottom-navbar/bottom-navbar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { RentalService } from './service/rental.service';
import { BookingService } from './rental-detail/rental-detail-booking/services/booking.service';
import { BookingHelperService } from './rental-detail/rental-detail-booking/services/booking.helper.service';
import { PaymentModule } from '../common/components/payment/payment.module';
// import { ImageUploadModule } from '../common/components/image-upload/image-upload.module';


const routes: Routes = [{
    path: 'rentals',
    component: RentalComponent,
    children: [
        { path: '', component: RentalListComponent },
        { path: 'new', component: RentalCreateComponent },
        { path: ':rentalId', component: RentalDetailComponent },
        // { path: ':rentalId/booking', component: BookingWithTimeWizardComponent },
        { path: ':rentalId/booking', component: RentalDetailBookingComponent },
        { path: ':rentalId/edit', component: RentalDetailUpdateComponent }

    ]
}];

@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent,
        RentalDetailBookingComponent,
        RentalDetailCalendarComponent,
        RentalCreateComponent,
        RentalDetailUpdateComponent,
        BookingWithTimeComponent,
        BookingWithTimeWizardComponent,
        BottomNavbarComponent
      ],
      imports: [
          CommonModule,
          RouterModule.forChild(routes),
          FormsModule,
          ReactiveFormsModule,
          NgbModule,
          MaterialModule,
          EditableModule,
          GoogleMapsModule,
          PaymentModule,
          // ImageUploadModule
          FullCalendarModule
        ],
      providers: [
          RentalService,
          BookingService,
          BookingHelperService,
        ],
      bootstrap: []
})
export class RentalModule { }