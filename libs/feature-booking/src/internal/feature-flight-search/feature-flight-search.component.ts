import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-flight-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-flight-search.component.html',
  styleUrl: './feature-flight-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFlightSearchComponent {}
