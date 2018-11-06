const express = require('express')
const request = require('request')

//test
const app = express()

app.get('/', function (req, res) {
	reqURL = "https://raw.githubusercontent.com/nodanaonlyzuul/against-humanity/master/source/cards.json"
	request(reqURL,
		function(error, response, body) {
			
			res.send(body)
		})
})

app.get('/toto', function (req, res) {
  	res.send('Hello Toto!')
})

port = process.env.PORT || 8080

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})