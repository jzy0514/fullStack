import { Store, createStore } from 'redux';
import { State, state} from './reducers';

export const store: Store<Store> = createStore(
  state
);