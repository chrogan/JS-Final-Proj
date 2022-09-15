

const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";
let map;
let coord;

function locationMap() {
  L.mapquest.key = key; //access key
  const locationValue = document.getElementById("userInput").value; //input from the user

  L.mapquest.geocoding().geocode(locationValue, createMap); //create geocode and call createMap callback
  document.getElementById("user_input_form").reset(); //clear the form for user experience
}

function createMap(error, response) {
  const location = response.results[0].locations[0]; //grabbing the location object and storing to location
  const latLng = location.displayLatLng; //grabbing the longitude and latitude and storing to latLng
  coord = latLng;

  // localStorage 
  // const obj = {name:'nelly',gender:'male'};
  // localStorage.setItem('myPerson',JSON.stringify(obj));
  // JSON.parse('NAMEOFKEY');
  

  if (map) {
    map.setView(latLng, 14);
  } else {
    map = L.mapquest.map("map", {
      //map initialized
      center: latLng,
      layers: L.mapquest.tileLayer("map"),
      zoom: 14,
      icon: L.mapquest.icons.marker({
        primaryColor: "#22407F",
        secondaryColor: "#3B5998",
        shadow: true,
        size: "md",
        symbol: "A",
      }),
    });
  }
}
document.getElementById("myBtn").addEventListener("click", locationMap);
