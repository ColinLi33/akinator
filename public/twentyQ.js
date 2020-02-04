let arr = arrInfo;
let questions = questionsInfo;
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
