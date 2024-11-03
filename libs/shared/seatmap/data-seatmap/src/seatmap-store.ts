import { signalStore, withState } from '@ngrx/signals';

const initialState = {
  isLoading: false,
};

export const SeatmapStore = signalStore(withState(initialState));
