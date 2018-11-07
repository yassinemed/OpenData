				function getRandomInt(max) {
					return Math.floor(Math.random() * Math.floor(max));
				}
				var char1, char2;
				var name_left, name_right;


				fetch('/getimage').then(response => response.json()).then(data => {

						name_left = data[0].name;
						name_right = data[0].name;
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
								})
								.catch(err => {
									console.error('An error ocurred', err);
								})

						} else {

							fetch('/getcards')
								.then(response => response.json())
								.then(data => {
									document.getElementById("left").innerHTML += "</br> <p> \"" + data.text + "\"</p>" + char1;
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
								})
								.catch(err => {
									console.error('An error ocurred', err);
								})

						} else {
							fetch('/getcards')
								.then(response => response.json())
								.then(data => {
									document.getElementById("right").innerHTML += "</br> <p>\"" + data.text + "\"</p>" + char2;
								})
								.catch(err => {
									console.error('An error ocurred', err);
								});

						}
					})
					.catch(err => {
						console.error('An error ocurred', err);
					});

				function cl_left() {
					fetch('/clicked', {
							method: 'POST'
						})
						.then(function (response) {
							if (response.ok) {
								console.log('Click was recorded');
								return;
							}
							throw new Error('Request failed.');
						})
						.catch(function (error) {
							console.log(error);
						});
					location.reload();
				}

				function cl_right() {
					fetch('/clicked', {
							method: 'POST'
						})
						.then(function (response) {
							if (response.ok) {
								console.log('Click was recorded');
								return;
							}
							throw new Error('Request failed.');
						})
						.catch(function (error) {
							console.log(error);
						});
					location.reload();
				}