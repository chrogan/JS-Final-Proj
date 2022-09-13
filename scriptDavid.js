// WARNING!!! Keep this
document.getElementById("user_input_form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userInput = document.getElementById("userInput").value;

  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();

  const queryObject = userInput;

  getLandmark(queryObject);
  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();
});

// NOTE  keep 17 - 27. rename function
function getLandmark(queryObject) {
  // access unsplash
  const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${queryObject}&client_id=I0KY6f0IJGwRaM-mfOTJPEkkpZpQ9bzjYMziPuUADQE`;

  fetch(unsplashApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const photos = data.results;
    });
}
