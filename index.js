
const restify = require('restify');
const restifyPlugins = require('restify').plugins;

const server = restify.createServer({
  name: 'bggthing',
  version: '1.0.0'
});

/**
  * Middleware
  */
  server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
  server.use(restifyPlugins.acceptParser(server.acceptable));
  server.use(restifyPlugins.queryParser({ mapParams: true }));
  server.use(restifyPlugins.fullResponse());

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

server.get('search/:name', function (req, res) {
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

server.get('boardgame/:id', function (req, res) {
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

server.get('hot/:type',  function (req, res) {
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

server.get('/home', restify.plugins.serveStatic({
  directory: './client',
  default: 'index.html'
}));

server.listen(5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
