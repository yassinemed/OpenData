const express = require('express')
const request = require('request')
const MongoClient = require('mongodb').MongoClient;

//test
const app = express()

app.use(express.static('public'));

let db;

const url = 'mongodb://user:azerty69@ds253203.mlab.com:53203/mongodab_test';

MongoClient.connect(url, (err, database) => {
	if (err) {
		return console.log(err);
	}
	db = database;
	// start the express web server listening on 8080
	app.listen(8080, () => {
		console.log('listening on 8080');
	});
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/getData.html');
});


app.get('/getcards', function (req, res) {
	reqURL = "https://raw.githubusercontent.com/nodanaonlyzuul/against-humanity/master/source/cards.json"
	request(reqURL,
		function (error, response, body) {

			var listOfQuestions = JSON.parse(body).filter(entry => entry.cardType === 'Q');
			var listOfAnswers = JSON.parse(body).filter(entry => entry.cardType === 'A');


			var idQuestion = Math.floor(Math.random() * listOfQuestions.length);
			var question = listOfQuestions[idQuestion]['text'];
			var numAnswer = listOfQuestions[idQuestion]['numAnswers'];

			var total = question;
			var i;

			for (i = 0; i < numAnswer; i++) {
				idAnswer = Math.floor(Math.random() * listOfAnswers.length);
				answer = listOfAnswers[idAnswer]['text'];

				var index_ = question.indexOf('_');
				answer = answer.replace('.', '')
				if (index_ == -1) {
					total = question.concat(" ", answer);
				} else {
					if (index_ != 0) {
						answer = answer.charAt(0).toLowerCase() + answer.slice(1)
					}
					total = total.replace('_', answer);
				}
			}
			res.send("{\"text\":\"" + total + "\"}");
		})
})


app.get('/getimage', function (req, res) {
	reqURL = "http://hp-api.herokuapp.com/api/characters"
	request(reqURL,
		function (error, response, body) {
			var personnages = JSON.parse(body);

			var indexImage1 = 0;
			var indexImage2 = 0;
			while (indexImage1 == indexImage2) {
				var indexImage1 = Math.floor(Math.random() * personnages.length);
				var indexImage2 = Math.floor(Math.random() * personnages.length);
			}

			var nom1 = personnages[indexImage1]['name'];
			var image1 = personnages[indexImage1]['image'];

			var nom2 = personnages[indexImage2]['name'];
			var image2 = personnages[indexImage2]['image'];

			jsonImage = '[{"name":"' + nom1 + '","url":"' + image1 + '"},' + '{"name":"' + nom2 + '","url":"' + image2 + '"}]'

			res.send(jsonImage);
		})
})

app.get('/getpersonages', function (req, res) {
	reqURL = "http://hp-api.herokuapp.com/api/characters"
	request(reqURL,
		function (error, response, body) {
			var personnages = JSON.parse(body);

			res.send(body);
		})
})


app.get('/getswanson', function (req, res) {
	reqURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/1"
	request(reqURL,
		function (error, response, body) {

			res.send(body);
		})
})

app.post('/clicked', (req, res) => {
	const click = {
		clickTime: new Date()
	};
	console.log(click);
	console.log(db);

	db.collection('clicks').save(click, (err, result) => {
		if (err) {
			return console.log(err);
		}
		console.log('click added to db');
		res.sendStatus(201);
	});
});


port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Example app listening on port ' + port)
})