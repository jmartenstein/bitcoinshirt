var flatiron = require('flatiron'),
  app = flatiron.app;

app.use(flatiron.plugins.http, {
  // HTTP options
});

app.router.get('/version', function () {

  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end( 'flatiron' + flatiron.version );

});

app.start(8080);
