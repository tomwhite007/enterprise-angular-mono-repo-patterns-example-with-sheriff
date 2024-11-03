import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { SharedStore } from '@shared-data/shared-store';

const initialState = {
  isLoading: false,
};

export const CheckInStore = signalStore(
  withState(initialState),
  withComputed(
    ({ isLoading: isCheckInLoading }, sharedStore = inject(SharedStore)) => ({
      isAnyLoading: computed(
        () => isCheckInLoading() || sharedStore.isLoading()
      ),
    })
  )
);
