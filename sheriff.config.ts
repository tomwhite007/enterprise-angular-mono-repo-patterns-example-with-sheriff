import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  modules: {
    'libs/feature-booking/src/lib': ['domain:booking', 'type:test-enforcement'],
    'libs/feature-check-in/src/lib': ['domain:check-in', 'type:feature'],
  },
  depRules: {
    'domain:*': [sameTag, 'shared'],
    'type:feature': ['type:feature', 'type:data'],
    root: ['type:feature', 'noTag'],
    noTag: ['type:feature', 'noTag', 'root'],
  },
  enableBarrelLess: true,
};
