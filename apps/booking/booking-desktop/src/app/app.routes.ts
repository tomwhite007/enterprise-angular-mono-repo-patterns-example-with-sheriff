import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'booking' },
  {
    path: 'booking',
    loadChildren: () =>
      import('@feature-booking/booking-routes').then((m) => m.bookingRoutes),
  },
];
