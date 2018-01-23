import { call, put } from 'redux-saga/effects';

import { hotSuccess, hotError } from '../actions/hot';
import { getHotList } from '../api';

export function* fetchHot() {
  try {
    const list = yield call(getHotList);
    yield put(hotSuccess(list));
    return list;
  } catch (error) {
    yield put(hotError(error.message));
    return error;
  }
}
