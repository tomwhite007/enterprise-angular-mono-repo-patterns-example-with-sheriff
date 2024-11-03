import { signalStore, withState } from '@ngrx/signals';

const initialState = {
  isLoading: false,
};

export const SharedStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
