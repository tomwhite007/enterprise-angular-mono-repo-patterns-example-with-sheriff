import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { SharedStore } from '@shared-data/shared-store';

const initialState = {
  isLoading: false,
};

export const BookingStore = signalStore(
  withState(initialState),
  withComputed(
    ({ isLoading: isBookingLoading }, sharedStore = inject(SharedStore)) => ({
      isAnyLoading: computed(
        () => isBookingLoading() || sharedStore.isLoading()
      ),
    })
  )
);
