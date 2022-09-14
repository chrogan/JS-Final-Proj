const locationMap = function () {
  L.mapquest.key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";

  const locationValue = document.getElementById("userInput").value;
  document.getElementById("user_input_form").reset();

  L.mapquest.geocoding().geocode(locationValue, createMap);

  function createMap(error, response) {
    const location = response.results[0].locations[0];
    const latLng = location.displayLatLng;
    const map = L.mapquest.map("map", {
      center: latLng,
      layers: L.mapquest.tileLayer("map"),
      zoom: 14,
    });
  }
};

document.getElementById("myBtn").addEventListener("click", locationMap);

const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";
const locationValue = document.getElementById("userInput").value;

//mapquest object to use for longtitude and latitude
const urlMap = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${locationValue}`;

fetch(urlMap)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
