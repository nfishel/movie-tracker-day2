// grab all the HTML elements to interact with
const titleInput = document.querySelector("#titleInput");
const ratingDrop = document.querySelector("#ratingDrop");
const addBtn = document.querySelector("#addBtn");

const leftCol = document.querySelector("#leftCol");
const rightCol = document.querySelector("#rightCol");


// global variables
const moviesList = [];
const ratingsList = [];

// create an event listener for the add button
addBtn.addEventListener("click", function(){
  // get the name (title) of the movie/show
  const movieTitle = titleInput.value;
  // get the number of stars from the dropdown
  const numberOfStars = Number(ratingDrop.value);

  // check to make sure the user has filled out the "form"
  if(movieTitle === "" || numberOfStars === 0){
    alert("Please fill out both the title and your rating for the movie/show!");
    titleInput.focus();
  }else{
    // now check to see if the movie title is NOT already in the movies list
    if(!moviesList.includes(movieTitle)){
      // add the movie data to the correct list
      moviesList.push(movieTitle);
      ratingsList.push(numberOfStars);
    }
    
  }

  // print out both lists in the correct columns
  leftCol.innerHTML = "<h3>Movies</h3>"
  //leftCol.innerHTML += moviesList.join("<br>");
  rightCol.innerHTML = "<h3>Rating</h3>"
  // rightCol.innerHTML += ratingsList.join("<br>");

  // loop through all the movies one movie at a time
  for(let i=0; i < moviesList.length; i++){
    // create a paragraph tag for each movie
    const movieP = document.createElement("p");
    const starsP = document.createElement("p");
    // lets add the name of the move to the paragraph
    movieP.textContent = moviesList[i];
    starsP.textContent = buildStars(ratingsList[i]);

    // add the favorite class if the movie has 3 or more stars
    if(ratingsList[i] > 2){
      movieP.classList.add('favorite');
      starsP.className = 'favorite';
    }
    
    // now lets add the paragraph to our page
    leftCol.insertAdjacentElement("beforeend", movieP);
    rightCol.insertAdjacentElement("beforeend", starsP);


    
    // print out that movie
   // leftCol.innerHTML += moviesList[i];
    // add the stars output
    //rightCol.innerHTML += buildStars(ratingsList[i]);
    // now add a line break
    //leftCol.innerHTML += "<br>";
    //rightCol.innerHTML += "<br>";
  }




  

  
  
  
  console.log(movieTitle, numberOfStars);
});


function buildStars(stars){
   let outputText = "";
  //loop through 5 times and print out a star each time 
  for(let i=0; i < 5; i++){
    if(i < stars){
      // print out a full star
      outputText += "★";
    } else {
      // print out an empty star
      outputText += "☆";
    } //end of if
  } // end of for loop
  return outputText;
} // end of buildStars()


