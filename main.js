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
var $daySelect = document.querySelector('#day-select');
var $timeSelect = document.querySelector('#time-select');
var $description = document.querySelector('#description');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  $modal.className = 'modal hidden';
  var newEntry = {};

  newEntry.day = $daySelect.value;
  newEntry.time = $timeSelect.value;
  newEntry.description = $description.value;
  newEntry.eventId = data.nextEntryId;

  data.nextEntryId++;
  data.entries.unshift(newEntry);
});
