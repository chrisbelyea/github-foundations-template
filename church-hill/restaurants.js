var document = "";

var data = [
  {
    "name": "Alamo BBQ",
    "neighborhood": "Church Hill",
    "address": "2202 Jefferson Ave",
    "note": "There's no basement in the Alamo"
  },
  {
    "name": "Dutch & Company",
    "neighborhood": "Church Hill",
    "address": "400 N 27th St",
    "note": "They serve food that you should eat"
  }
];

function loadSuggestion() {
  var suggestion = data[Math.floor(Math.random() * data.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();
  document.getElementById("suggestion").innerHTML =
    '<div class="vcard">' +
      '<div class="org">' + suggestion.name + '</div>' +
      '<div class="adr">' +
        '<div class="street-address">' + suggestion.address + '</div>' +
        '<span class="locality">Richmond</span>, ' +
        '<span class="state">VA</span>' +
      '</div>' +
      '<div class="note">' + suggestion.note + '</div>' +
    '</div>';
}
