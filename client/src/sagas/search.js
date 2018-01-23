import { call, put } from 'redux-saga/effects';

import { searchSuccess, searchError } from '../actions/search';
import { search } from '../api';

export function* fetchSearch({ params: { id } }) {
  try {
    const list = yield call(search, id);
    yield put(searchSuccess(list));
    return list;
  } catch (error) {
    yield put(searchError(error.message));
    return error;
  }
}
