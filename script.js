const mainContainer = document.querySelector('main');
const thanksContainer = document.querySelector('section');
const submitButton = document.querySelector('.submit');
const ratings = document.querySelectorAll('.number');
const actualRating = document.getElementById('rating');

submitButton.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
});

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    actualRating.innerHTML = rating.innerHTML;
}); 
}); 
