var data = {
  // entries: [],
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
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

  newEntry.time = $timeSelect.value;
  newEntry.description = $description.value;
  newEntry.eventId = data.nextEntryId;

  data.nextEntryId++;

  if ($daySelect.value === 'M') {
    data.mon.unshift(newEntry);
  } else if ($daySelect.value === 'Tu') {
    data.tue.unshift(newEntry);
  } else if ($daySelect.value === 'W') {
    data.wed.unshift(newEntry);
  } else if ($daySelect.value === 'Th') {
    data.thu.unshift(newEntry);
  } else if ($daySelect.value === 'F') {
    data.fri.unshift(newEntry);
  } else if ($daySelect.value === 'Sa') {
    data.sat.unshift(newEntry);
  } else if ($daySelect.value === 'Su') {
    data.sun.unshift(newEntry);
  }

  // data.entries.unshift(newEntry);
});

// function sort(entryObj) {
//   var sorted = entryObj;
//   entryObj.sort();

//   return sorted;
// }
