import { Route } from '@angular/router';
import { SeatmapStore } from '@shared-data-seatmap/seatmap-store';

export const seatmapRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./internal/feature-seatmap/feature-seatmap.component').then(
        (m) => m.FeatureSeatmapComponent
      ),
    providers: [SeatmapStore],
  },
];
