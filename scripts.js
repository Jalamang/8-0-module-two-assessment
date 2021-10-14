fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((movies) => {
     console.log(movies);

   
    const dropDown = document.querySelector("#pick-movie");
    movies.forEach((movie) => {
      const option = document.createElement("option");
      option.setAttribute("value", movie.title);
      option.textContent = movie.title;
      dropDown.append(option);
     
    });
})