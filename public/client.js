function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
var char1, char2;
var hp_left, hp_right;

var citation_left;
var citation_right;

function page() {
	fetch('/getimage').then(response => response.json()).then(data => {

			hp_left = data[0];
			hp_right = data[1];
			document.getElementById("myImg1").src = data[0].url;
			document.getElementById("myImg2").src = data[1].url;

			char1 = "<p> <i>" + data[0].name + "</i> </p>";
			char2 = "<p> <i>" + data[1].name + "</i> </p>";



			// Gauche
			probRon = getRandomInt(10)

			if (probRon == 0) {

				fetch('/getswanson')
					.then(response => response.json())
					.then(data => {
						quote_left = data[0]
						document.getElementById("left").innerHTML += "</br> <p> \"" + data[0] + "\"</p>" + char1;
						citation_left = data[0];
					})
					.catch(err => {
						console.error('An error ocurred', err);
					})

			} else {

				fetch('/getcards')
					.then(response => response.json())
					.then(data => {
						document.getElementById("left").innerHTML += "</br> <p> \"" + data.text + "\"</p>" + char1;
						citation_left = data.text;
					})
					.catch(err => {
						console.error('An error ocurred', err);
					});

			}

			probRon = getRandomInt(10)

			if (probRon == 0) {

				// Droite
				fetch('/getswanson')
					.then(response => response.json())
					.then(data => {
						quote_right = data[0]
						document.getElementById("right").innerHTML += "</br> <p>\"" + data[0] + "\"</p>" + char2;
						citation_right = data[0];
					})
					.catch(err => {
						console.error('An error ocurred', err);
					})

			} else {
				fetch('/getcards')
					.then(response => response.json())
					.then(data => {
						document.getElementById("right").innerHTML += "</br> <p>\"" + data.text + "\"</p>" + char2;
						citation_right = data.text;
					})
					.catch(err => {
						console.error('An error ocurred', err);
					});

			}
		})
		.catch(err => {
			console.error('An error ocurred', err);
		});
}

function cl_left() {
	var perso_cita_left = {}
	perso_cita_left.name = hp_left['name']
	perso_cita_left.citation = citation_left

	console.log(perso_cita_left);
	fetch('/clicked', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json'
			},
			credentials: "same-origin",
			body: JSON.stringify(perso_cita_left)
		})
		.then(function (response) {
			if (response.ok) {
				console.log('Click was recorded');
				alert(hp_left);
				return;
			}
			throw new Error('Request failed.');
		})
		.catch(function (error) {
			console.log(error);
		});
	page();
}

function cl_right() {
	var perso_cita_right = {}
	perso_cita_right.name = hp_right['name']
	perso_cita_right.citation = citation_right

	console.log(perso_cita_right);
	fetch('/clicked', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json'
			},
			credentials: "same-origin",
			body: JSON.stringify(perso_cita_right)
		})
		.then(function (response) {
			if (response.ok) {
				console.log('Click was recorded');
				alert(hp_right);
				return;
			}
			throw new Error('Request failed.');
		})
		.catch(function (error) {
			console.log(error);
		});
	page();
}