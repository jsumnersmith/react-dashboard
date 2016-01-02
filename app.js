// Module requires
// =============================
var lessMiddleware  = require('less-middleware');
var nunjucks = require('nunjucks');

// Express Cofiguration
// =============================
var express = require('express');
var app = express();

// Template Cofiguration
// =============================
nunjucks.configure('views', {
  autoescape: true,
  express: app
});


// Middleware
// =============================
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));


// Routing
// =============================
app.get('/', function(req, res) {
  res.render('index.html');
});

var port = 3000;
// Heroku
if (process.env.PORT) {
  port = process.env.PORT;
} else {
  try {
    // Stagecoach option
    port = fs.readFileSync(__dirname + '/data/port', 'UTF-8').replace(/\s+$/, '');
  } catch (err) {
    console.log(err);
    console.log("I see no data/port file, defaulting to port " + port);
  }
}

http.createServer(app).listen(port, '127.0.0.1', function() {
  console.log("Express server listening on %s:%d in %s mode", '127.0.0.1', port, app.settings.env);
});
