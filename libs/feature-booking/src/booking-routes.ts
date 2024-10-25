import { Route } from '@angular/router';

export const bookingRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./lib/feature-booking/feature-booking.component').then(
        (m) => m.FeatureBookingComponent
      ),
  },
];
