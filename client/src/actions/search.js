export const SEARCH_REQUEST = 'App/SEARCH_REQUEST';
export function searchRequest() {
  return {
    type: SEARCH_REQUEST
  };
}

export const SEARCH_SUCCESS = 'App/SEARCH_SUCCESS';
export function searchSuccess({ items: { item } }) {
  return {
    type: SEARCH_SUCCESS,
    payload: {
      list: item
    }
  };
}

export const SEARCH_ERROR = 'App/SEARCH_ERROR';
export function searchError() {
  return {
    type: SEARCH_ERROR
  };
}
