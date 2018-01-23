import { HOT_REQUEST, HOT_SUCCESS, HOT_ERROR } from '../actions/hot';

const INITIAL_STATE = Object.assign(
  {},
  {
    list: [],
    isFetching: false,
    error: ''
  }
);

function hotReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case HOT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: '',
        list: []
      });
    case HOT_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error
      });
    case HOT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: '',
        list: action.payload.list
      });
    default:
      return state;
  }
}

export default hotReducer;
