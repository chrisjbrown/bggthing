import { call, put } from 'redux-saga/effects';

import {
  boardgameSuccess,
  boardgameError,
  boardgameRequest
} from '../actions/boardgame';
import { getBoardgame } from '../api';

export function* fetchBoardgame({ params: { id } }) {
  try {
    yield put(boardgameRequest());
    const game = yield call(getBoardgame, id);
    yield put(boardgameSuccess(game));
    return game;
  } catch (error) {
    yield put(boardgameError(error.message));
    return error;
  }
}
