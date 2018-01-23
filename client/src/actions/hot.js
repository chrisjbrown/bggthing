export const HOT_REQUEST = 'App/HOT_REQUEST';
export function hotRequest() {
  return {
    type: HOT_REQUEST
  };
}

export const HOT_SUCCESS = 'App/HOT_SUCCESS';
export function hotSuccess({ items: { item } }) {
  return {
    type: HOT_SUCCESS,
    payload: {
      list: item
    }
  };
}

export const HOT_ERROR = 'App/HOT_ERROR';
export function hotError() {
  return {
    type: HOT_ERROR
  };
}
