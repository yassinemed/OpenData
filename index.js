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

			var questions = JSON.parse(body).filter(entry => entry.cardType === 'Q');
			var answers = JSON.parse(body).filter(entry => entry.cardType === 'A');


			var idBlackCard=Math.floor(Math.random() * questions.length);
			var blackCardText=questions[idBlackCard]['text'];
			var nbAnswer=questions[idBlackCard]['numAnswers'];

			var complet;
			var i;
			for (i=0;i<nbAnswer;i++){
				console.log(i);
				idBlankCard=Math.floor(Math.random() * answers.length);
				blankCardText=answers[idBlankCard]['text'];

				var index_ = blackCardText.indexOf('_');
				if (index_ ==-1){
					complet=blackCardText.concat(" ",blankCardText);
				}else{
					complet=blackCardText.replace('_',blankCardText);
				}

			}
			bite='';
			test=bite.concat(blackCardText+'<br/>'+blankCardText+'<br/>'+complet+'<br/>'+nbAnswer);
			

			res.send(test);
		})
})

app.get('/toto', function (req, res) {
	res.send('Hello Toto!')
})

port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Example app listening on port ' + port)
})