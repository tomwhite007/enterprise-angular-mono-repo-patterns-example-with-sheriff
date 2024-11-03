import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-passenger-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-passenger-info.component.html',
  styleUrl: './feature-passenger-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePassengerInfoComponent {}
