import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  modules: {
    '@feature-booking': ['domain:booking', 'type:test-enforcement'],
    '@feature-check-in': ['domain:check-in', 'type:feature'],
  },
  depRules: {
    'domain:*': [sameTag, 'shared'],
    'type:feature': ['type:feature', 'type:data'],
    root: ['type:feature', 'noTag'],
    // noTag: ['type:feature', 'noTag', 'root'],
  },
  enableBarrelLess: true,
};
