import { Route } from '@angular/router';

export const checkInRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./internal/feature-check-in/feature-check-in.component').then(
        (m) => m.FeatureCheckInComponent
      ),
  },
  {
    path: 'seatmap',
    loadChildren: () =>
      import('@shared-feature-seatmap/seatmap-routes').then(
        (m) => m.seatmapRoutes
      ),
  },
];
