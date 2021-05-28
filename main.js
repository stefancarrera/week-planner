var $addEntry = document.querySelector('.addEntry');
var $modal = document.querySelector('.modal');

$addEntry.addEventListener('click', function (event) {
  if (event.target.matches('.addEntry')) {
    $modal.className = 'modal';
  }
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  $modal.className = 'modal hidden';
});
