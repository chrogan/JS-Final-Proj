document.getElementById("user_input_form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userInput = document.getElementById("userInput").value;

  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();

  const queryObject = userInput;

  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();
});
let index_count = 0;
let index_new;
// const queryObject = 85226;
const lat = 33.307575;
const lon = -111.84494;
const latnLon = [33.307575, -111.84494];
const type = "tourist_attraction";

// function setupLandmark(lat, lon) {
//   if index_new >= 10 {
//     index_new = 0;
//   } else {
//     index_new++2;
//   }
//   getLandmark(lat, lon)
// }

function getLandmark(coordArray) {
  // access google api
  const googleApi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordArray}&radius=8000&type=${type}&&key=AIzaSyBlM-WBRE6npH8Tb2rem-rTL8m1Ti0gT7c`;

  fetch(googleApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const results = data.results;

      for (let i = 0; i < data.results.length; i++, index_count++) {
        idx = `"${index_count}"`;
        // console.log(results[index_count].name);
        // console.log(results[index_count].rating);
        // console.log(results["0"].types);
        // console.log(results["0"].vicinity);
        // console.log(results["0"].photos["0"].photo_reference);
        // console.log(results["0"].opening_hours.open_now);

        const nomen = results[index_count].name;
        const rating = results[index_count].rating;
        // types are weird. they are multiple. will require sorting and removing "establishment"
        const address = results[index_count].vicinity;
        const isOpen = results[index_count].opening_hours.open_now;
        const photo_ref = results[index_count].photos["0"].photo_reference;
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_ref}&key=AIzaSyBlM-WBRE6npH8Tb2rem-rTL8m1Ti0gT7c`;

        // Created Div #1
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("style", "width: 18rem;");
        // card.setAttribute("style", "height: fit-content;");
        // card.setAttribute("style", "width: 300px;");

        // card.setAttrebute("style", "margin-left: 5px");
        // card.setAttrebute("style", "margin-right: 5px");
        // card.setAttribute("style", "margin: 0px 5px");
        document.getElementById("api_output_container").appendChild(card);

        // Image URL
        const DEFAULT_PHOTO =
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80";
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("alt", "no photo available");
        image.setAttribute("style", "height: 200px;");
        if (photoUrl.length === 0) {
          image.setAttribute("src", DEFAULT_PHOTO);
        } else {
          image.setAttribute("src", photoUrl);
        }
        card.appendChild(image);

        // Created Div #2
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);
        // Destination
        const newDestination = document.createElement("h4");
        newDestination.classList.add("card-title");
        newDestination.innerText = nomen;
        cardBody.appendChild(newDestination);
        // Rating
        const newRating = document.createElement("p");
        newRating.classList.add("card-text");
        newRating.innerText = `Rated: ${rating} / 5`;
        cardBody.appendChild(newRating);
        // Address
        const newAddress = document.createElement("h");
        newAddress.classList.add("card-title");
        newAddress.innerText = address;
        cardBody.appendChild(newAddress);
      }
    });
}
