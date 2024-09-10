const addMovieModel = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModel = document.getElementById('delete-modal');

const movies = [];

const updateUI = () =>{
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';

    }

};

const deleteMovieHandler = movieId=>{
    let movieIndex=0;
    for(const movie of movies){
        if(movie.id === movieId){
          break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    toggleBackdrop();
    deleteMovieModel.classList.remove('visible');
    //listRoot.removeChild(listRoot.children[movieIndex]);
};

const closeMovieDeletionModel = () =>{
    toggleBackdrop();
    deleteMovieModel.classList.remove('visible');
};

const startDeleteMovieHandler = (movieId)=>{

    
    deleteMovieModel.classList.add('visible');
    toggleBackdrop();

    const cancelDeletionButton = deleteMovieModel.querySelector('.btn--passive');
    const confirmDeletionButton = deleteMovieModel.querySelector('.btn--danger');
    console.log(confirmDeletionButton);

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModel);

    confirmDeletionButton.addEventListener('click',deleteMovieHandler.bind(null, movieId));


   // deleteMovie(movieId);
   
};

const renderNewMovieElement = (id,title,imageUrl,rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <image src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click',startDeleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}



const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () =>{
    addMovieModel.classList.remove('visible');

};



const showMovieModal = () =>{
    clearMovieInputs();
    addMovieModel.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInputs= ()=>{
    for(const ui of userInputs){
        ui.value='';

    }
}

const backdropClickHandler= () =>{
   closeMovieModal();
   closeMovieDeletionModel();
};

const addMovieHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() ==='' || 
        imageUrlValue.trim() ==='' || 
        ratingValue.trim() ==='' || 
        +ratingValue < 1 ||
        +ratingValue > 5
    ){
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }
    const newMovie = {
        id:Math.random().toString(),
        title:titleValue,
        image:imageUrlValue,
        rating:ratingValue
    };
    
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    renderNewMovieElement(newMovie.id,newMovie.title,newMovie.image,newMovie.rating);
    updateUI();

};




startMovieButton.addEventListener('click',showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click',()=>closeMovieModal());
confirmAddMovieButton.addEventListener('click',addMovieHandler);


