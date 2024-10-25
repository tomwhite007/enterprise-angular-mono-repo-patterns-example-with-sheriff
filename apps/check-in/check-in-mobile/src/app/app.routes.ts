import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'check-in' },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@feature-check-in/check-in-routes').then((m) => m.checkInRoutes),
  },
];
