// routing.js

var flatiron = require('flatiron'),
  app = flatiron.app;

app.use(flatiron.plugins.http);
app.use(flatiron.plugins.static, { 
  dir: __dirname + '/static',
  index: 'index.html'
});

app.router.get('/headers', function () {
  this.res.json(this.req.headers);
});

app.router.get('/version', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end( 'flatiron ' + flatiron.version );
});

var port = process.env.PORT || 5000;
app.start(port, function() {
  console.log("Listening on " + port);
  console.log("Directory " + __dirname + '/static');
});
