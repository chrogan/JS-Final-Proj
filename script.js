// WARNING!!! Keep this
document.getElementById("user_input_form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userInput = document.getElementById("userInput").value;

  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();

  const queryObject = userInput;

  getUnsplash(queryObject);
  //   clear user inputs from the form (for UX)
  document.getElementById("user_input_form").reset();
});

// NOTE  keep 17 - 27. rename function
function getUnsplash(queryObject) {
  // access unsplash
  const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${queryObject}&client_id=I0KY6f0IJGwRaM-mfOTJPEkkpZpQ9bzjYMziPuUADQE`;

  fetch(unsplashApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const photos = data.results;

      // NOTE can delete below
      for (let i = 1; i < 11; i++) {
        //   const randIdx = Math.floor(Math.random() * 100);
        // NOTE why this not work if we change photos.length = 1000?
        let randIdx = Math.floor(Math.random() * photos.length);
        const imgUrl = photos[randIdx].urls.thumb;

        //   document.getElementById(myimage).setAttribute("src", myimage);
        // }
        switch (i) {
          case 1:
            document.getElementById("imagep1").setAttribute("src", imgUrl);
            break;

          case 2:
            document.getElementById("imagep2").setAttribute("src", imgUrl);
            break;

          case 3:
            document.getElementById("imagep3").setAttribute("src", imgUrl);
            break;

          case 4:
            document.getElementById("imagep4").setAttribute("src", imgUrl);
            break;

          case 5:
            document.getElementById("imagep5").setAttribute("src", imgUrl);
            break;

          case 6:
            document.getElementById("imagep6").setAttribute("src", imgUrl);
            break;

          case 7:
            document.getElementById("imagep7").setAttribute("src", imgUrl);
            break;

          case 8:
            document.getElementById("imagep8").setAttribute("src", imgUrl);
            break;
          case 9:
            document.getElementById("imagep9").setAttribute("src", imgUrl);
            break;
          case 10:
            document.getElementById("imagep10").setAttribute("src", imgUrl);
            break;
        }

        // NOTE should work but don't

        //   console.log(photos.length);
        // myimagep = eval(`imagep${i}`);
        // console.log(myimagep);
        // document.getElementById(myimagep).setAttribute("src", img);
      }
    });
}
