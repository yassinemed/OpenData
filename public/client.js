function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
var char1, char2,
	hp_left, hp_right,
	citation_left, citation_right,
	species_left, species_right,
	gender_left, gender_right,
	house_left, house_right,
	dateOfBirth_left, dateOfBirth_right,
	yearOfBirth_left, yearOfBirth_right,
	ancestry_left, ancestry_right,
	eyeColour_left, eyeColour_right,
	hairColour_left, hairColour_right,
	patronus_left, patronus_right,
	actor_left, actor_right,
	image_left, image_right;

function page() {
	fetch('/gethp').then(response => response.json()).then(data => {

			hp_left = data[0];
			hp_right = data[1];

			document.getElementById("myImg1").src = data[0].image;
			document.getElementById("myImg2").src = data[1].image;

			char1 = data[0].name;
			species_left = data[0].species
			gender_left = data[0].gender
			house_left = data[0].house
			dateOfBirth_left = data[0].dateOfBirth
			yearOfBirth_left = data[0].yearOfBirth
			ancestry_left = data[0].ancestry
			eyeColour_left = data[0].eyeColour
			hairColour_left = data[0].hairColour
			patronus_left = data[0].patronus
			actor_left = data[0].actor
			image_left = data[0].image

			char2 = data[1].name;
			species_right = data[1].species
			gender_right = data[1].gender
			house_right = data[1].house
			dateOfBirth_right = data[1].dateOfBirth
			yearOfBirth_right = data[1].yearOfBirth
			ancestry_right = data[1].ancestry
			eyeColour_right = data[1].eyeColour
			hairColour_right = data[1].hairColour
			patronus_right = data[1].patronus
			actor_right = data[1].actor
			image_right = data[1].image

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
	perso_cita_left.species = species_left
	perso_cita_left.gender = gender_left
	perso_cita_left.house = house_left
	perso_cita_left.dateOfBirth = dateOfBirth_left
	perso_cita_left.yearOfBirth = yearOfBirth_left
	perso_cita_left.ancestry = ancestry_left
	perso_cita_left.eyeColour = eyeColour_left
	perso_cita_left.hairColour = hairColour_left
	perso_cita_left.patronus = patronus_left
	perso_cita_left.actor = actor_left
	perso_cita_left.image = image_left

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
	perso_cita_right.species = species_right
	perso_cita_right.gender = gender_right
	perso_cita_right.house = house_right
	perso_cita_right.dateOfBirth = dateOfBirth_right
	perso_cita_right.yearOfBirth = yearOfBirth_right
	perso_cita_right.ancestry = ancestry_right
	perso_cita_right.eyeColour = eyeColour_right
	perso_cita_right.hairColour = hairColour_right
	perso_cita_right.patronus = patronus_right
	perso_cita_right.actor = actor_right
	perso_cita_right.image = image_right

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


function show_jeu(){
	var jeu = document.getElementById("jeu");
	jeu.style.display = "block";
	
	var resultats = document.getElementById("resultats");
	resultats.style.display = "none";
}

function show_resultats(){
	var jeu = document.getElementById("jeu");
	jeu.style.display = "none";
	
	var resultats = document.getElementById("resultats");
	resultats.style.display = "block";
}