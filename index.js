var express = require('express');
var app = express();
var outputString = "Testing outputString";

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// outputString = buf.toString(fs.readFileSync("index.html"));


app.get('/', function(request, response) {
  response.send(outputString);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
