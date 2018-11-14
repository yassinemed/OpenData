const express = require('express')
const request = require('request')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')

//test
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let db;

const url = 'mongodb://user:azerty69@ds253203.mlab.com:53203/mongodab_test';

const port_dbb = 8001

MongoClient.connect(url, (err, database) => {
	if (err) {
		return console.log(err);
	}
	db = database;
	// start the express web server listening on 8080
	app.listen(port_dbb, () => {
		console.log('listening on ' + String(port_dbb));
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
				if (index_ == -1) {
					total = question.concat(" ", answer);
				} else {
					if (index_ != 0) {
						answer = answer.charAt(0).toLowerCase() + answer.slice(1)
					}
					if (index_ != question.length - 1) {
						answer = answer.replace('.', '')
					}
					total = total.replace('_', answer);
				}
			}
			res.send("{\"text\":\"" + total + "\"}");
		})
})


app.get('/gethp', function (req, res) {
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

			jsonImage = "[" + JSON.stringify(personnages[indexImage1]) + "," + JSON.stringify(personnages[indexImage2]) + "]"

			res.send(jsonImage);
		})
})


app.get('/getswanson', function (req, res) {
	reqURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/1"
	request(reqURL,
		function (error, response, body) {

			res.send(body);
		})
})

app.post('/clicked', function (req, res) {
	body = req.body

	db.collection('hp_test').findOne({
		name: body.name,
		"citation.sentence": body.citation
	}, (err, result) => {
		if (err) {
			return console.log(err);
		}
		if (result) {
			db.collection('hp_test').updateOne({
				name: body.name,
				"citation.sentence": body.citation
			}, {
				$inc: {
					"citation.$.count": 1
				}
			})
		} else {
			db.collection('hp_test').findOne({
				name: body.name,
			}, (err, result) => {
				if (err) {
					return console.log(err);
				}
				if (result) {
					db.collection('hp_test').findOneAndUpdate({
						name: body.name
					}, {
						$push: {
							citation: {
								sentence: body.citation,
								count: 1
							}
						}
					})

				} else {
					db.collection('hp_test').insert({
						name: body.name,
						species: body.species,
						gender: body.gender,
						house: body.house,
						dateOfBirth: body.dateOfBirth,
						yearOfBirth: body.yearOfBirth,
						ancestry: body.ancestry,
						eyeColour: body.eyeColour,
						hairColour: body.hairColour,
						patronus: body.patronus,
						actor: body.actor,
						citation: [{
							sentence: body.citation,
							count: 1
						}]
					})
				}
			})
		}
	})
})


port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Example app listening on port ' + port)
})