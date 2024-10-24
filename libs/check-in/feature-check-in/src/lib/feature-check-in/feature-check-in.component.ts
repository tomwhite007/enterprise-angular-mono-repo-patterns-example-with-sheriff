import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-check-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-check-in.component.html',
  styleUrl: './feature-check-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCheckInComponent {}
