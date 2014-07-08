var fs = require('fs');
var http = require('http');
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'CWrfRlao8XeGxNwYRpWF9GRZv'
  , consumer_secret:      'tHMt9pv9e353V0TZVzjwPPqcADLbgFXoW12UypYg4MwSTYRigm'
  , access_token:         '106597865-04mD0uiJkr0qgkYQJRTLCgFTBCpZX4mGJ0Fvf47x'
  , access_token_secret:  'mB3uBpp352zO6MLbdpjpBTr1uNwaD1L2bwYokmkJ7Qey7'
})

// tests if the tweets have images, then prints them out on the console
T.get('search/tweets', { q: 'foundersandcoders' }, function(err, data, response) {
  
  
	fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + 'data.json');
	    }
	});
  
});

http.createServer(function (request, response){
	fs.readFile("index.html", function (err, data) {
		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)
	});
}).listen(8080)

