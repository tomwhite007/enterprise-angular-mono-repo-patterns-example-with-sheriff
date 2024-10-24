import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-booking.component.html',
  styleUrl: './feature-booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureBookingComponent {}
