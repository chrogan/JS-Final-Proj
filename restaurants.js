let index_cnt = 0;
let myIndex;

const types = "restaurant";
document.querySelector(".restaurantBtn").addEventListener("click", function () {
  while (document.querySelector("#api_output_container")) {
    document.querySelector("#api_super_container").firstChild.remove();
  }

  const apiContainer = document.createElement("div");

  apiContainer.setAttribute("id", "api_output_container");
  apiContainer.setAttribute("style", "justify-content:left");

  document.querySelector("#api_super_container").appendChild(apiContainer);

  getRestaurant();
});

function getRestaurant() {
  const coord = JSON.parse(localStorage.getItem("coordinates"));
  const coordArray = [coord.lat, coord.lng];

  // access google api
  const googleApi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordArray}&radius=80000&type=${types}&&key=AIzaSyBlM-WBRE6npH8Tb2rem-rTL8m1Ti0gT7c`;

  fetch(googleApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const results = data.results;

      for (let i = 0; i < data.results.length; i++, index_cnt++) {
        myIndex = `"${index_cnt}"`;

        const nomen = results[index_cnt].name;
        const rating = results[index_cnt].rating;
        const address = results[index_cnt].vicinity;
        const photo_ref = results[index_cnt].photos["0"].photo_reference;
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_ref}&key=AIzaSyBlM-WBRE6npH8Tb2rem-rTL8m1Ti0gT7c`;

        // Created Div #1
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute(
          "style",
          "width: 18rem;  border: 4px solid black; border-radius: 10px;"
        );
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
  index_cnt = 0;
}
