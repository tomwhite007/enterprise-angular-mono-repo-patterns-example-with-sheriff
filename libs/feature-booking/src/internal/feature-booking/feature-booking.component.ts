import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookingStore } from '../data-booking/booking-store';

@Component({
  selector: 'lib-feature-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-booking.component.html',
  styleUrl: './feature-booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BookingStore],
})
export class FeatureBookingComponent {}
