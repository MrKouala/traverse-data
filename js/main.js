// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  var yes = 0;
  var no = 0;
  var maybe = 0;

  for (var i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") yes++;
    else if (surveyData[i] == "No") no++;
    else if (surveyData[i] == "Maybe") maybe++;
  }
  outputEl.innerHTML = `Amount of Yes: ${yes}<br>Amount of No: ${no}<br>Amount of Maybe: ${maybe}`;
}

function traverseAgeData() {
  var young = 0;
  var adult = 0;
  var midlife = 0;
  var old = 0;
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  for (var i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) young++;
    else if (ageData[i] <= 35) adult++;
    else if (ageData[i] <= 65) midlife++;
    else old++;
  }
  outputEl.innerHTML = `Under eighteen: ${young}<br>Between eighteen and thirty-five: ${adult}<br>Between thirty-six and sixty-five: ${midlife}<br>Over sixty-five: ${old}`;
}

function traverseNumberData() {
  var even = 0;
  var odd = 0;
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  for (var i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) even++;
    else odd++;
  }

  outputEl.innerHTML = `Even: ${even}<br>Odd: ${odd}`;
}
