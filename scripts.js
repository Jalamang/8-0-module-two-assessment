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

const movieTitle = document.querySelector("#title");
const yearRelease = document.querySelector("#year-release");
const description = document.querySelector("#description");

let selectedMovie;

dropDown.addEventListener("change", (/*even*/) => {
  //event.target.value 
  movies.forEach((movie) => {
    if (dropDown.value === movie.title) {
           selectedMovie =  movie
          console.log(movies)
      movieTitle.textContent = movie.title;
      yearRelease.textContent = movie.release_date;
      description.textContent = movie.description;
      
    }
  });
})

const membersUl = document.querySelector("#ulMovie");
const addButton = document.querySelector("#submit-form");
const input = document.querySelector("#input-form")
console.log(input.value)

const teamMember = () => {
    movies.forEach((movie) => {  
        let newMovie = document.createElement("li");
        console.log(document.querySelector("#input-form"))
        newMovie.textContent = `${movie.title}; ${input.value} ` 
       
      });
//     if(!document.querySelector('ul').textContent.includes(newMovie.textContent)){
 membersUl.prepend(newMovie);
// }

addButton.addEventListener("click", teamMember);

}

// document.querySelector('#save-button').addEventListener('click',() =>{
//     // if(textArea.textContent.length == 0){
//     //   alert('You must enter')
//     // }
//     const CharacterName = document.createElement('li')
//     CharacterName.textContent = textArea.value
//     console.log(CharacterName.textContent +"<><><>")
//     CharacterName.style.color = colorSelection.value
//     CharacterName.fontFamily =  fontSelection.value
//       if(!document.querySelector('#saved-list').textContent.includes(CharacterName.textContent)){
//       document.querySelector('#saveText').append(CharacterName)
//       }
//   })




  })