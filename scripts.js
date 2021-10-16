fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((movies) => {
    const dropDown = document.querySelector("#pick-movie");
    movies.forEach((movie) => {
      const option = document.createElement("option");
      option.setAttribute("value", movie.title);
      option.textContent = movie.title;
      dropDown.append(option);
    });

    const movieTitle = document.querySelector("#title");
    const yearRelease = document.querySelector("#year-release");
    const description = document.querySelector("#description");

    let selectedMovie;

    dropDown.addEventListener("change", (/*even*/) => {
      //event.target.value
      movies.forEach((movie) => {
        if (dropDown.value === movie.title) {
          selectedMovie = movie;
          //   console.log(movies)
          movieTitle.textContent = movie.title;
          yearRelease.textContent = movie.release_date;
          description.textContent = movie.description;
        }
      });
    });

    const movieUl = document.querySelector("#ulMovie");
    // const addButton = document.querySelector("#submit-form");
    const reviewForm = document.querySelector("form");

    // let newMovie;
    // input.addEventListener("input", (event) => {
    //   event.preventDefault();
    //   //   document.querySelector("li").setAttribute("style", "font-weight: bold");
      
    // });
    
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();
        newMovie = document.createElement("li");
        newMovie.innerHTML = `<strong>${selectedMovie.title}:</strong> ${event.target.review.value}`;
        movieUl.prepend(newMovie);
        event.target.reset();
    });
    
  });
