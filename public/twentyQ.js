var arr = [
    ['Alabama', 0, 0, 0, 1, 0, 0, 1, 1, 0, 0], ['Alaska', 0, 0, 0, 1, 1, 0, 1, 1, 0, 0], ['Arizona', 1, 0, 1, 1, 0, 0, 1, 1, 0, 0], ['Arkansas', 1, 0, 0, 0, 0, 0, 1, 0, 0, 0], ['California', 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    ['Colorado', 1, 1, 1, 0, 0, 0, 0, 1, 0, 0], ['Connecticut', 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], ['Delaware', 0, 1, 0, 0, 0, 0, 0, 1, 1, 0], ['Florida', 0, 0, 1, 1, 0, 0, 0, 1, 1, 0], ['Georgia', 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    ['Hawaii', 0, 1, 0, 1, 0, 0, 0, 1, 0, 0], ['Idaho', 1, 0, 0, 1, 1, 0, 1, 1, 0, 0], ['Illinois', 1, 1, 1, 0, 0, 0, 1, 0, 0, 1], ['Indiana', 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], ['Iowa', 1, 0, 0, 1, 0, 0, 1, 1, 0, 0], ['Kansas', 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    ['Kentucky', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], ['Louisiana', 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], ['Maine', 0, 1, 0, 1, 1, 0, 0, 1, 1, 0], ['Maryland', 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], ['Massachusetts', 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    ['Michigan', 1, 1, 1, 0, 1, 0, 0, 0, 0, 1], ['Minnesota', 1, 1, 1, 1, 1, 0, 0, 1, 0, 1], ['Mississippi', 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], ['Missouri', 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], ['Montana', 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
    ['Nebraska', 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], ['Nevada', 1, 1, 0, 1, 0, 0, 0, 1, 0, 0], ['New Hampshire', 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0], ['New Jersey', 0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
    ['New Mexico', 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], ['New York', 0, 1, 1, 1, 1, 1, 0, 0, 1, 1], ['North Carolina', 0, 1, 1, 0, 0, 1, 0, 1, 1, 0], ['North Dakota', 1, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    ['Ohio', 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], ['Oklahoma', 1, 0, 0, 0, 0, 0, 1, 1, 0, 0], ['Oregon', 0, 1, 0, 1, 0, 0, 1, 0, 0, 0], ['Pennsylvania', 1, 1, 1, 0, 1, 0, 0, 1, 0, 1], ['Rhode Island', 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    ['South Carolina', 0, 0, 1, 0, 0, 1, 0, 1, 1, 0], ['South Dakota', 1, 0, 0, 0, 0, 1, 0, 1, 0, 0], ['Tennessee', 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], ['Texas', 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], ['Utah', 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    ['Vermont', 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], ['Virginia', 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], ['Washington', 0, 1, 1, 0, 1, 0, 0, 0, 0, 0], ['West Virginia', 1, 0, 0, 0, 0, 1, 0, 1, 0, 0], ['Wisconsin', 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    ['Wyoming', 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
];

let questions = ['Is your state landlocked?', 'Does your state have a Democratic governor?', 'Is the population of your state greater than 5 million?',
	"Is the length your state's name less than 8 letters?", "Does your state border Canada?", 'Does the name of your state have 2 words?',
	'Does your state start with a vowel?', 'Does your state end with a vowel (Y is not a vowel)?', 'Does your state border the Atlantic Ocean?',
	'Does your state border a Great Lake?'
];
let currQuest = 0;

let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let question = document.getElementById("question");
let state = document.getElementById("state");
yesButton.style.display = "block";
noButton.style.display = "block";
question.style.display = "block";
state.style.display = "none";
question.innerHTML = questions[currQuest];


function submitYes() {
	gameController(true, arr);
}

function submitNo() {
	gameController(false, arr);
}

function gameController(answer, array) {
	if (answer) {
		array = isItemInArray(array, 0); //remove all states that answer no
	} else {
		array = isItemInArray(array, 1); //remove all states that answer yes
	}
  if (checkWin(array)) { // check if theres only 1 state left
		yesButton.style.display = "none";
		noButton.style.display = "none";
		question.style.display = "none";
		state.style.display = "block";
		document.getElementById("state").innerHTML = "The state that you are thinking of is " + array[0][0];
	}
	currQuest = findBestQ(array); //find the next best question to use
  if(currQuest == -1){
    yesButton.style.display = "none";
		noButton.style.display = "none";
		question.style.display = "none";
		state.style.display = "block";
		document.getElementById("state").innerHTML = "We ran out of questions! OH NO! :(";
  } else {
	   changeQuestion(currQuest); //change the question on screen;
	   console.log(array);
  }
}

//finds all states that have item in it for the current question
function isItemInArray(array, item) {
	let spliceThis = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i][currQuest + 1] == item) {
			spliceThis.push(i);
		}
	}
	for (let i = spliceThis.length - 1; i > -1; i--) {
		array = deleteRow(array, spliceThis[i]);
	}
	array = deleteCol(array, currQuest + 1);
	return array;
}
//deletes state row
function deleteRow(array, row) {
	array.splice(row, 1);
	return array;
}

function deleteCol(array, col) {
	for (let i = 0; i < array.length; i++) {
		var row = array[i];
		row.splice(col, 1);
	}
	return array;
}

function findBestQ(array) {
	//remove current question from question list so it doesn't happen twice
	questions.splice(currQuest, 1);
  if(questions.length == 0){
    return -1;
  } else if (questions.length == 1) {
      return 0;
	} else {
		let numberOfStates = array.length;
		let questionYes = [];

		//starts the counter for number of Yes
		for (let i = 0; i < questions.length; i++) {
			questionYes.push(0);
		}
		//adds to questionYes array if element is
		for (let i = 0; i < questions.length; i++) {
			for (let j = 0; j < numberOfStates; j++) {
				if (array[j][i + 1] == 1) {
					questionYes[i] = questionYes[i] + 1;
				}
			}
		}

		let goal = Math.floor(numberOfStates / 2); //goal for yes
		//finding closest value to goal so we can get the best question
		let closest = questionYes.reduce(function(prev, curr) {
			return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
		});
		return questionYes.indexOf(closest);
	}
}

function changeQuestion(nextQ) {
  //changes question in HTML
	document.getElementById("question").innerHTML = questions[nextQ];
}

//check if there is only one state left
function checkWin(array) {
	if (array.length == 1) {
		return true;
	}
	return false;
}
