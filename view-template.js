var express = require('express');
var app = express();
app.set('view engine', 'hbs');

app.get('/', function (request, res) {
  var name = request.query.name;
  res.render('hello.hbs', {
    title: 'Hello',
    name: name
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
