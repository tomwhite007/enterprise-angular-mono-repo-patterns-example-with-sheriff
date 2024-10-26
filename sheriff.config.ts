import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  modules: {
    '@feature-booking': ['domain:booking', 'type:feature'],
    '@feature-check-in': ['domain:check-in', 'type:ui'],
  },
  depRules: {
    'domain:*': [sameTag, 'shared'],
    'type:feature': 'type:data',
    root: ['type:feature', 'noTag'],
    noTag: ['type:feature', 'noTag'],
  },
};
