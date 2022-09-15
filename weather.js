
const weather = {
    getWeather: function(lat, lon) {
        const apiKey = '2f1f6d6cf1d67f2a490669b0c4e4fa0c';
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

        fetch(apiURL)
            .then(function(response) {
                return response.json()
        })
            .then(function(data) {
                weather.showWeather(data)
        })
            
    },

    showWeather: function(data) {
        const { name } = data;
        const { temp } = data.main;
        const { description } = data.weather[0];
        const { icon } = data.weather[0];
        // const { dt } = data;
        // const { timezone } = data;

        const celsius = (temp - 32) * 5 / 9;
        const newDescription = description.replace(/\s+/g, '%20');
        // const date = new Date((dt + timezone) * 1000);
        // const time = `${date.getUTCHours()}:${date.getUTCMinutes()}`


        // This section is working @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        // document.getElementById('time').innerText = time; // h4
        // document.getElementById('right_box_heading').innerText = name; // h4
        // document.getElementById('temp').innerText = `${temp.toFixed(0)}°`; // h5
        // document.getElementById('cards_container').innerText = description; // div
        // document.getElementById('weather_icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`; // img
        // document.getElementById('right_box').style.backgroundImage = `url(https://source.unsplash.com/250x100/?${name})`;

        // This section is working @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        // Grabbing apiContainer
        const apiBox = document.getElementById('api_output_container');

        // Create Div container to hold everything
        const apiBody = document.createElement('div');
        apiBody.setAttribute('id', 'apiBody');
        apiBox.appendChild(apiBody);

        // Create Time h4
        // const timeContainer = document.createElement('h4');
        // timeContainer.setAttribute('id', 'time');
        // timeContainer.innerText = time;
        // apiBody.appendChild(timeContainer);

        // Create City h4
        const cityContainer = document.createElement('h4');
        cityContainer.setAttribute('id', 'city');
        cityContainer.innerText = name;
        apiBody.appendChild(cityContainer);

        // Create Temp Fahrenheit h5
        const tempFahrenheitContainer = document.createElement('h5');
        tempFahrenheitContainer.setAttribute('id', 'temp_fahrenheit');
        tempFahrenheitContainer.innerText = `${temp.toFixed(0)}°F`;
        apiBody.appendChild(tempFahrenheitContainer);

        // Create Temp Celsius h6
        const tempCelsiusContainer = document.createElement('h6');
        tempCelsiusContainer.setAttribute('id', 'temp_celsiu');
        tempCelsiusContainer.innerText = `${celsius.toFixed(0)}°C`;
        apiBody.appendChild(tempCelsiusContainer);

        // Create Div box for Description and Img
        const descriptionImageBox = document.createElement('div');
        descriptionImageBox.setAttribute('id', 'desc_img_box');
        descriptionImageBox.setAttribute('style', 'display: flex; align-items: center;')
        apiBody.appendChild(descriptionImageBox);

        // Create Icon img
        const imageContainer = document.createElement('img');
        imageContainer.setAttribute('id', 'image')
        imageContainer.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        descriptionImageBox.appendChild(imageContainer);

        // Create Description p
        const descriptionContainer = document.createElement('p');
        descriptionContainer.setAttribute('id', 'description');
        descriptionContainer.innerText = description.toUpperCase();
        descriptionImageBox.appendChild(descriptionContainer);


        document.getElementById('api_output_container').style.backgroundImage =  `url(https://source.unsplash.com/1600x900/?${newDescription})`; //`url(https://source.unsplash.com/250x100/?${name})`; // `url(https://source.unsplash.com/1600x900/?${description})`;



    },

    searchWeather: function() {
        // const latitude = document.querySelector('.latitude').value;
        // const longitude = document.querySelector('.longitude').value;

        // Seattle
        // const latitude = document.querySelector('.latitude').value = 47.60;
        // const longitude = document.querySelector('.longitude').value = -122.33;

        // London, Canada
        // const latitude = document.querySelector('.latitude').value = 42.98;
        // const longitude = document.querySelector('.longitude').value = -81.23;

        // Austin, TX
        // const latitude = document.querySelector('.latitude').value = 30.27;
        // const longitude = document.querySelector('.longitude').value = -97.75;

        // Madīnat as Sādāt
        // const latitude = document.querySelector('.latitude').value = 30.26;
        // const longitude = document.querySelector('.longitude').value = 30.26;

        // Burwash Landing
        // const latitude = document.querySelector('.latitude').value = 60.55;
        // const longitude = document.querySelector('.longitude').value = -140.19;

        // Tokyo
        // const latitude = document.querySelector('.latitude').value = 35.6845587;
        // const longitude = document.querySelector('.longitude').value = 139.7506524;

        // weather.getWeather(latitude, longitude);
        // weather.getWeather(47.60, -122.33);
        weather.getWeather(coord.lat, coord.lng);
        document.getElementById('apiBody').remove();
    }
}

document.querySelector('.weatherBtn').addEventListener('click', weather.searchWeather);