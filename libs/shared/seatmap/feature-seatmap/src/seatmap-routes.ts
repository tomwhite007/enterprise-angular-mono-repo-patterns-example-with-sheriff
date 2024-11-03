import { Route } from '@angular/router';

export const seatmapRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./internal/feature-seatmap/feature-seatmap.component').then(
        (m) => m.FeatureSeatmapComponent
      ),
  },
];
