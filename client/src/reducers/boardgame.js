import {
  BOARDGAME_REQUEST,
  BOARDGAME_SUCCESS,
  BOARDGAME_ERROR
} from '../actions/boardgame';

const INITIAL_STATE = Object.assign(
  {},
  {
    game: {
      name: {
        value: ''
      },
      image: ''
    },
    isFetching: false,
    error: ''
  }
);

function boardgameReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case BOARDGAME_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: '',
        game: []
      });
    case BOARDGAME_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error
      });
    case BOARDGAME_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: '',
        game: action.payload.game
      });
    default:
      return state;
  }
}

export default boardgameReducer;
