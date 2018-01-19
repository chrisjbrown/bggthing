const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const bggOptions = {
  timeout: 50000, // timeout of 10s (5s is the default)

  // see https://github.com/cujojs/rest/blob/master/docs/interceptors.md#module-rest/interceptor/retry
  retry: {
    initial: 100,
    multiplier: 2,
    max: 15e3
  }
};

const bgg = require('bgg')(bggOptions);

// Put all API endpoints under '/api'
app.get('/search/:name', function (req, res) {
  bgg('search', {
    query: req.params.name,
    type: req.query.type || 'boardgame',
    exact: req.query.exact || 0
  })
  .then(function(results){
    res.send(results);
  }).catch((response) => {
    console.log('response error', response);
    res.send(response);
  });
});

app.get('/boardgame/:id', function (req, res) {
  bgg('thing', {
    id: req.params.id,
    type: req.query.type || 'boardgame',
    versions: req.query.versions || 0,
    videos: req.query.videos || 0,
    stats: req.query.stats || 0,
    historical: req.query.historical || 0,
    marketplace: req.query.marketplace || 0,
    comments: req.query.comments || 0,
    page: req.query.page || 1,
    pagesize: req.query.pagesize || 20,
  })
  .then(function(results){
    res.send(results);
  }).catch((response) => {
    console.log('response error', response);
    res.send(response);
  });
});

app.get('/hot/:type',  function (req, res) {
  bgg('hot', {
    type: req.params.type,
  })
  .then(function(results){
    res.send(results);
  }).catch((response) => {
    console.log('response error', response);
    res.send(response);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`bggthing listening on ${port}`);
