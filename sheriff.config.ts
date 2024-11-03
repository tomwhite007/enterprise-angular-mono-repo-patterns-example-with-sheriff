import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  modules: {
    'libs/feature-booking/src': ['domain:booking', 'type:feature'],
    'libs/feature-check-in/src': ['domain:check-in', 'type:feature'],
  },
  depRules: {
    'domain:*': [sameTag, 'shared'],
    'type:feature': ['type:feature', 'type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:ui', 'type:util'],
    'type:data': ['type:data', 'type:util'],
    'type:util': 'type:util',
    root: 'type:feature',
  },
  enableBarrelLess: true,
};
