fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((movies) => {
    //  console.log(movies);

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
    const addButton = document.querySelector("#submit-form");
    const input = document.querySelector("#input-form");

    let newMovie;
    input.addEventListener("input", (event) => {
      event.preventDefault();
        newMovie = document.createElement("li");
        newMovie.textContent = `${selectedMovie.title}: ${input.value} `;
      
    });

    addButton.addEventListener("click", (event) => {
      event.preventDefault();

      //if(!document.querySelector('ul').textContent.includes(input.value)){
      movieUl.prepend(newMovie);
      //}
    });
  });
