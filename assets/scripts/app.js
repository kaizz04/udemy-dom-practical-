const addMovieModel = document.getElementById('add-modal');

const backdrop = document.getElementById('backdrop');

const startMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
};

const toggleMovieModel = () =>{
    addMovieModel.classList.toggle('visible')
    toggleBackdrop();
};

startMovieButton.addEventListener('click',toggleMovieModel);




const backdropClickHandler= () =>{
    toggleMovieModel();
};

backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click',()=>toggleMovieModel());
