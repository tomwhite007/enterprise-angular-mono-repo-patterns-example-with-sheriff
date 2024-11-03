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
    path: 'flight-search',
    loadComponent: () =>
      import(
        './internal/feature-flight-search/feature-flight-search.component'
      ).then((m) => m.FeatureFlightSearchComponent),
  },
  {
    path: 'passenger-info',
    loadComponent: () =>
      import(
        './internal/feature-passenger-info/feature-passenger-info.component'
      ).then((m) => m.FeaturePassengerInfoComponent),
  },
  {
    path: 'seat-listing',
    loadChildren: () =>
      import('@shared-feature-seat-listing/seat-listing-routes').then(
        (m) => m.seatListingRoutes
      ),
  },
];
