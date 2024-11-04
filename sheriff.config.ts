import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  entryFile: 'apps/check-in/check-in-mobile/src/main.ts',
  modules: {
    'libs/feature-booking/src': ['domain:booking', 'type:feature'],
    'libs/feature-booking/src/internal/data-booking/booking-store': [
      'domain:booking',
      'type:data',
    ],
    'libs/feature-booking/src/internal/feature-flight-search': [
      'domain:booking',
      'type:feature',
    ],
    'libs/feature-booking/src/internal/feature-passenger-info': [
      'domain:booking',
      'type:feature',
    ],
    'libs/feature-check-in/src': ['domain:check-in', 'type:feature'],
    'libs/feature-check-in/src/internal/data-check-in': [
      'domain:check-in',
      'type:data',
    ],
    'libs/shared/data-shared/src': ['domain:shared', 'type:data'],
    'libs/shared/seatmap/data-seatmap/src': ['domain:shared', 'type:data'],
    'libs/shared/seatmap/feature-seat-listing/src': [
      'domain:shared',
      'type:feature',
    ],
    'libs/shared/seatmap/feature-seatmap/src': [
      'domain:shared',
      'type:feature',
    ],
  },
  depRules: {
    'domain:*': [sameTag, 'domain:shared'],
    'type:feature': ['type:feature', 'type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:ui', 'type:util'],
    'type:data': ['type:data', 'type:util'],
    'type:util': 'type:util',
    root: 'type:feature', // (domain wildcard) so apps can import their shell feature
  },
  enableBarrelLess: true,
};
