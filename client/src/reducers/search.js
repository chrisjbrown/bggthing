import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actions/search';

const INITIAL_STATE = Object.assign(
  {},
  {
    list: [],
    isFetching: false,
    error: ''
  }
);

function searchReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: '',
        list: []
      });
    case SEARCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error
      });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: '',
        list: action.payload.list
      });
    default:
      return state;
  }
}

export default searchReducer;
