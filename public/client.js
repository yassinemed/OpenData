function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
var char1, char2;
var hp_left, hp_right;

var citation_left;
var citation_right;

function page() {
	fetch('/gethp').then(response => response.json()).then(data => {

			hp_left = data[0];
			hp_right = data[1];

			document.getElementById("myImg1").src = data[0].image;
			document.getElementById("myImg2").src = data[1].image;

			char1 = data[0].name;
			char2 = data[1].name;



			// Gauche
			probRon = getRandomInt(10)

			if (probRon == 0) {

				fetch('/getswanson')
					.then(response => response.json())
					.then(data => {
						citation_left = data[0];
						document.getElementById("citation_left").innerHTML = citation_left;
						document.getElementById("char1").innerHTML = char1
					})
					.catch(err => {
						console.error('An error ocurred', err);
					})

			} else {

				fetch('/getcards')
					.then(response => response.json())
					.then(data => {
						citation_left = data.text;
						document.getElementById("citation_left").innerHTML = citation_left;
						document.getElementById("char1").innerHTML = char1
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
						citation_right = data[0];
						document.getElementById("citation_right").innerHTML = citation_right;
						document.getElementById("char2").innerHTML = char2
					})
					.catch(err => {
						console.error('An error ocurred', err);
					})

			} else {
				fetch('/getcards')
					.then(response => response.json())
					.then(data => {
						citation_right = data.text;
						document.getElementById("citation_right").innerHTML = citation_right
						document.getElementById("char2").innerHTML = char2
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