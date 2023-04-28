const ratingPoints = document.querySelectorAll('.rating__score__point');
const submitButton = document.querySelector('.rating__submit');

ratingPoints.forEach(point => {
  point.addEventListener('click', () => {
    removeActive();
    point.classList.toggle('active');
  });
});

function removeActive() {
  ratingPoints.forEach(point => {
    if (point.classList.contains('active')) {
      point.classList.remove('active');
    }
  });
}

submitButton.addEventListener('click', () => {
  ratingPoints.forEach(point => {
    if (point.classList.contains('active')) {
      document.querySelector('.raiting__point').innerHTML = point.innerText;
    }
  });
  setTimeout(() => {
    document.querySelector('.popup').style.display = 'grid';
  }, 150);
});