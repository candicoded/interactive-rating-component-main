const mainContainer = document.querySelector('main');
const thanksContainer = document.querySelector('section');
const submitButton = document.querySelector('.submit');
const ratings = document.querySelectorAll('.number');
const actualRating = document.getElementById('rating');

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    actualRating.innerHTML = rating.innerHTML;
    ratings.forEach((rating) => {
      rating.classList.remove('active');
    });
      rating.classList.add('active');
      submitButton.disabled = false;
  }); 
});

submitButton.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
});