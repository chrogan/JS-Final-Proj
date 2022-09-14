const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";
let map;
let coord;
function locationMap() {
  L.mapquest.key = key; //access key
  const locationValue = document.getElementById("userInput").value; //input from the user

  L.mapquest.geocoding().geocode(locationValue, createMap); //create geocode
  document.getElementById("user_input").reset(); //clear the form for user experience
}

function createMap(error, response) {
  const location = response.results[0].locations[0]; //grabbing the location object and storing to location
  const latLng = location.displayLatLng; //grabbing the longitude and latitude and storing to latLng
  coord = latLng;
  if (map) {
    map.setView(latLng, 14);
  } else {
    map = L.mapquest.map("map", {
      center: latLng,
      layers: L.mapquest.tileLayer("map"),
      zoom: 14,
    });
  }
  return latLng;
}

document.getElementById("myBtn").addEventListener("click", locationMap);
