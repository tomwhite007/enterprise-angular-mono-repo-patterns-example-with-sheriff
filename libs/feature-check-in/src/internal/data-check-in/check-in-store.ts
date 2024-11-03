import { signalStore, withState } from '@ngrx/signals';

const initialState = {
  isLoading: false,
};

export const CheckInStore = signalStore(withState(initialState));
