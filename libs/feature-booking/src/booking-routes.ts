import { Route } from '@angular/router';

export const bookingRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./internal/feature-booking/feature-booking.component').then(
        (m) => m.FeatureBookingComponent
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
