const express = require('express')
const request = require('request')

//test
const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/getData.html');
});


app.get('/getcards', function (req, res) {
	reqURL = "https://raw.githubusercontent.com/nodanaonlyzuul/against-humanity/master/source/cards.json"
	request(reqURL,
		function (error, response, body) {
			var questions = JSON.parse(body).filter(entry => entry.cardType === 'Q')
			var answers = JSON.parse(body).filter(entry => entry.cardType === 'A')



			res.send(answers)
		})
})

app.get('/toto', function (req, res) {
	res.send('Hello Toto!')
})

port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Example app listening on port ' + port)
})