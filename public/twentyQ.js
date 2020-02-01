//index 0 = state, index 1 = is it landlocked?, index 2 = democratic governor?, index 3 = population > 5 million, index 4 = length of name less than 8 letters? index 5 = does your state border canada, index 6 = does your state have 2 words index 7 = start with vowel, index 8 = end with vowel
var arr = [
    ['Alabama', 0, 0, 0, 1, 0, 0, 1, 1], ['Alaska', 0, 0, 0, 1, 1, 0, 1, 1], ['Arizona', 1, 0, 1, 1, 0, 0, 1, 1], ['Arkansas', 1, 0, 0, 0, 0, 0, 1, 0], ['California', 0, 1, 1, 0, 0, 0, 0, 1],
    ['Colorado', 1, 1, 1, 0, 0, 0, 0, 1], ['Connecticut', 0, 1, 0, 0, 0, 0, 0, 0], ['Delaware', 0, 1, 0, 0, 0, 0, 0, 1], ['Florida', 0, 0, 1, 1, 0, 0, 0, 1], ['Georgia', 0, 0, 1, 1, 0, 0, 0, 1],
    ['Hawaii', 0, 1, 0, 1, 0, 0, 0, 1], ['Idaho', 1, 0, 0, 1, 1, 0, 1, 1], ['Illinois', 1, 1, 1, 0, 0, 0, 1, 0], ['Indiana', 1, 0, 1, 1, 0, 0, 1, 1], ['Iowa', 1, 0, 0, 1, 0, 0, 1, 1], ['Kansas', 1, 1, 0, 1, 0, 0, 0, 0],
    ['Kentucky', 1, 1, 0, 0, 0, 0, 0, 0], ['Louisiana', 0, 1, 0, 0, 0, 0, 0, 1], ['Maine', 0, 1, 0, 1, 1, 0, 0, 1], ['Maryland', 0, 0, 1, 0, 0, 0, 0, 0], ['Massachusetts', 0, 0, 1, 0, 0, 0, 0, 0],
    ['Michigan', 1, 1, 1, 0, 1, 0, 0, 0], ['Minnesota', 1, 1, 1, 1, 1, 0, 0, 1], ['Mississippi', 0, 0, 0, 0, 0, 0, 0, 1], ['Missouri', 1, 0, 1, 0, 0, 0, 0, 1], ['Montana', 1, 1, 0, 1, 1, 0, 0, 1],
    ['Nebraska', 1, 0, 0, 0, 0, 0, 0, 1], ['Nevada', 1, 1, 0, 1, 0, 0, 0, 1], ['New Hampshire', 0, 0, 0, 0, 1, 1, 0, 1], ['New Jersey', 0, 1, 1, 0, 0, 1, 0, 0],
    ['New Mexico', 1, 1, 0, 0, 0, 1, 0, 1], ['New York', 0, 1, 1, 1, 1, 1, 0, 0], ['North Carolina', 0, 1, 1, 0, 0, 1, 0, 1], ['North Dakota', 1, 0, 0, 0, 1, 1, 0, 1],
    ['Ohio', 1, 0, 1, 1, 1, 0, 1, 0], ['Oklahoma', 1, 0, 0, 0, 0, 0, 1, 1], ['Oregon', 0, 1, 0, 1, 0, 0, 1, 0], ['Pennsylvania', 1, 1, 1, 0, 1, 0, 0, 1], ['Rhode Island', 0, 1, 0, 0, 0, 1, 0, 0],
    ['South Carolina', 0, 0, 1, 0, 0, 1, 0, 1], ['South Dakota', 1, 0, 0, 0, 0, 1, 0, 1], ['Tennessee', 1, 0, 1, 0, 0, 0, 0, 1], ['Texas', 0, 0, 1, 1, 0, 0, 0, 0], ['Utah', 1, 0, 0, 1, 0, 0, 1, 0],
    ['Vermont', 1, 0, 0, 1, 1, 0, 0, 0], ['Virginia', 0, 1, 1, 0, 0, 0, 0, 1], ['Washington', 0, 1, 1, 0, 1, 0, 0, 0], ['West Virginia', 1, 0, 0, 0, 0, 1, 0, 1], ['Wisconsin', 1, 1, 1, 0, 0, 0, 0, 0],
    ['Wyoming', 1, 0, 0, 1, 0, 0, 0, 0]
];

let questions = ['Is your state landlocked?', 'Does your state have a Democratic governor?', 'Is the population of your state greater than 5 million?', "Is the length your state's name less than 8 letters?", "Does your state border Canada?", 'Does the name of your state have 2 words?', 'Does your state start with a vowel?', 'Does your state end with a vowel (Y is not a vowel)?'];
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


function submitYes(){
  gameController(true, arr);
}
function submitNo(){
  gameController(false, arr);
}

function gameController(answer, array){
  if(answer){
    array = isItemInArray(array, 0); //remove all states that answer no
  } else {
    array = isItemInArray(array, 1); //remove all states that answer yes
  }
  currQuest = findBestQ(array); //find the next best question to use
  console.log(array.length);
  if(checkWin(array)){ // check if theres only 1 state left
    yesButton.style.display = "none";
    noButton.style.display = "none";
    question.style.display = "none";
    state.style.display = "block";
    document.getElementById("state").innerHTML = "The state that you are thinking of is " + array[0][0];

  }
  changeQuestion(currQuest); //change the question on screen;
  console.log(array);
}

//finds all states that have item in it for the current question
function isItemInArray(array, item) {
  let spliceThis = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][currQuest + 1] == item) {
          spliceThis.push(i);
        }
    }
    for(let i = spliceThis.length - 1; i > -1 ;i--){
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

function deleteCol(array, col){
  for (let i = 0; i < array.length; i++) {
        var row = array[i];
        row.splice(col, 1);
    }
  return array;
}

function findBestQ(array){
  //remove current question from question list so it doesn't happen twice
  questions.splice(currQuest, 1);
  let numberOfStates = array.length;
  let questionYes = [];

  //starts the counter for number of Yes
  for(let i = 0; i < questions.length; i++){
    questionYes.push(0);
  }
  //adds to questionYes array if element is
  for(let i = 0; i < questions.length; i++){
    for(let j = 0; j < numberOfStates; j++){
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

function changeQuestion(nextQ){
  document.getElementById("question").innerHTML = questions[nextQ];
}

function checkWin(array){
  if(array.length == 1){
    return true;
  }
  return false;
}
