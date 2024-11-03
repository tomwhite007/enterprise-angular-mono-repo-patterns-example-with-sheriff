import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CheckInStore } from '../data-check-in/check-in-store';

@Component({
  selector: 'lib-feature-check-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-check-in.component.html',
  styleUrl: './feature-check-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CheckInStore],
})
export class FeatureCheckInComponent {
  checkInStore = inject(CheckInStore);
}
