import { Route } from '@angular/router';
import { SeatmapStore } from '@shared-data-seatmap/seatmap-store';

export const seatListingRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './internal/feature-seat-listing/feature-seat-listing.component'
      ).then((m) => m.FeatureSeatListingComponent),
    providers: [SeatmapStore],
  },
];
