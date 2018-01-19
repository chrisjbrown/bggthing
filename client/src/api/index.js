export function search(
  name,
  type = 'boardgame',
  exact = 0
) {
  return fetch(
    `/search/${name}` +
    `?type=${type}` +
    `&exact=${exact}`
  ).then((response) => {
    if (response.ok) {
      return response.json().catch(error => {
        return Promise.reject(new Error('Invalid JSON: ' + error.message));
      });
    }
    
    if (response.status === 404) {
      return Promise.reject(new Error('Endpoint not found: '));
    }

    return Promise.reject(new Error('HTTP error: ' + response.status));
  })
  .catch(error => {
    return Promise.reject(new Error(error.message));
  });
}

export function getBoardgame(
  id,
  type = 'boardgame',
  versions = 0,
  videos = 0,
  stats = 1,
  historical = 0,
  marketplace = 0,
  comments = 0,
  page = 1,
  pagesize = 20,
) {
  return fetch(
    `/boardgame/${id}` +
    `?type=${type}` +
    `&versions=${versions}` +
    `&videos=${videos}` +
    `&stats=${stats}` +
    `&historical=${historical}` +
    `&marketplace=${marketplace}` +
    `&comments=${comments}` +
    `&page=${page}` +
    `&pagesize=${pagesize}`
  ).then((response) => {
    if (response.ok) {
      return response.json().catch(error => {
        return Promise.reject(new Error('Invalid JSON: ' + error.message));
      });
    }

    if (response.status === 404) {
      return Promise.reject(new Error('Endpoint not found: '));
    }

    return Promise.reject(new Error('HTTP error: ' + response.status));
  })
  .catch(error => {
    return Promise.reject(new Error(error.message));
  });
}

export function getHotList(type = 'boardgame') {
  return fetch(
    `/hot/${type}`
  ).then((response) => {
    if (response.ok) {
      return response.json().catch(error => {
        return Promise.reject(new Error('Invalid JSON: ' + error.message));
      });
    }
    
    if (response.status === 404) {
      return Promise.reject(new Error('Endpoint not found: '));
    }

    return Promise.reject(new Error('HTTP error: ' + response.status));
  })
  .catch(error => {
    return Promise.reject(new Error(error.message));
  });
}