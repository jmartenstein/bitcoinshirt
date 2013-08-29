var fs = require('fs');
var flatiron = require('flatiron'),
  app = flatiron.app;


app.use(flatiron.plugins.http, {
  // HTTP options
});

var text = fs.readFileSync('index.html');
var buffer = new Buffer(text);

app.router.get('/', function () {
  this.res.end(buffer.toString());
});

app.router.get('/version', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end( 'flatiron' + flatiron.version );
});

app.start(8080);
