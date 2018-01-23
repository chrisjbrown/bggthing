import { all } from 'redux-saga/effects';
import { watchNavigationSaga } from './navigation';

// single entry point to start all Sagas at once
export default function* initSagas() {
  yield all([watchNavigationSaga()]);
}
