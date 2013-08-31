var fs = require('fs');
var flatiron = require('flatiron'),
  app = flatiron.app;


app.use(flatiron.plugins.http, {
  // HTTP options
});

var text_index = fs.readFileSync('index.html');
var buff_index = new Buffer(text_index);

app.router.get('/', function () {
  this.res.end(buff_index.toString());
});

app.router.get('/version', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end( 'flatiron' + flatiron.version );
});

app.start(5000);
