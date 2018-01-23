import { call, takeLatest } from 'redux-saga/effects';
import { fetchHot } from './hot';
import { fetchSearch } from './search';
import { fetchBoardgame } from './boardgame';

const SAGA_FOR_ROUTE = {
  '/': fetchHot,
  '/boardgame/:id': fetchBoardgame,
  '/search/:id': fetchSearch
};

function* navigationSaga(action) {
  const location = action.payload;
  const saga = SAGA_FOR_ROUTE[location.route];

  if (saga) {
    yield call(saga, location);
  }
}

export function* watchNavigationSaga() {
  yield [takeLatest('ROUTER_LOCATION_CHANGED', navigationSaga)];
}
