var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('javascript-local-storage-days');

if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

window.addEventListener('beforeunload', function (event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage-days', dataJson);
});

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
