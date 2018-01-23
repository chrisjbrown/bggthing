export const BOARDGAME_REQUEST = 'App/BOARDGAME_REQUEST';
export function boardgameRequest() {
  return {
    type: BOARDGAME_REQUEST
  };
}

export const BOARDGAME_SUCCESS = 'App/BOARDGAME_SUCCESS';
export function boardgameSuccess({ items: { item } }) {
  return {
    type: BOARDGAME_SUCCESS,
    payload: {
      game: item
    }
  };
}

export const BOARDGAME_ERROR = 'App/BOARDGAME_ERROR';
export function boardgameError() {
  return {
    type: BOARDGAME_ERROR
  };
}
