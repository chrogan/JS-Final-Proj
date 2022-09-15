
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

        const celsius = (temp - 32) * 5 / 9;
        const newDescription = description.replace(/\s+/g, '%20');

        // Grabbing apiContainer
        const apiBox = document.getElementById('api_output_container');

        // Create Div container to hold everything
        const apiBody = document.createElement('div');
        apiBody.setAttribute('id', 'apiBody');
        apiBox.appendChild(apiBody);

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


        document.getElementById('api_output_container').style.backgroundImage =  `url(https://source.unsplash.com/1600x900/?${newDescription})`;


    },

    searchWeather: function() {
        weather.getWeather(coord.lat, coord.lng);
        document.getElementById('apiBody').remove();
    }
}

document.querySelector('.weatherBtn').addEventListener('click', weather.searchWeather);