const addMovieModel = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
};

const toggleMovieModel = () =>{
    addMovieModel.classList.toggle('visible')
    toggleBackdrop();
};

const backdropClickHandler= () =>{
    toggleMovieModel();
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
    };

};
startMovieButton.addEventListener('click',toggleMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click',()=>toggleMovieModel());
confirmAddMovieButton.addEventListener('click',addMovieHandler);

