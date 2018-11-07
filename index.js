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

			var listOfQuestions = JSON.parse(body).filter(entry => entry.cardType === 'Q');
			var listOfAnswers = JSON.parse(body).filter(entry => entry.cardType === 'A');


			var idQuestion = Math.floor(Math.random() * listOfQuestions.length);
			var question = listOfQuestions[idQuestion]['text'];
			var numAnswer = listOfQuestions[idQuestion]['numAnswers'];

			var total = question;
			var i;

			for (i = 0; i<numAnswer; i++){
				idAnswer = Math.floor(Math.random() * listOfAnswers.length);
				answer = listOfAnswers[idAnswer]['text'];

				var index_ = question.indexOf('_');
				answer = answer.replace('.', '')
				if (index_ == -1){
					total = question.concat(" ", answer);
				}
				else{
					if (index_ != 0) {answer = answer.charAt(0).toLowerCase() + answer.slice(1)}
					total = total.replace('_', answer);
				}
			}

			res.send(total);
		})
})


app.get('/getimage', function (req, res) {
	reqURL = "http://hp-api.herokuapp.com/api/characters"
	request(reqURL,
		function (error, response, body) {
			var personnages = JSON.parse(body);
			var indexImage=Math.floor(Math.random() * personnages.length);
			
			var image=personnages[indexImage]['image'];

			res.send(image);
		})
})


app.get('/getswanson', function (req, res) {
	reqURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/1"
	request(reqURL,
		function (error, response, body) {

			res.send(body);
		})
})


port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Example app listening on port ' + port)
})