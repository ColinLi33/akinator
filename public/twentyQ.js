const landlocked = new TreeNode('Is the state landlocked?');
let currNode = null;
landlocked.setLeft(new TreeNode('Is the state longer than 6 letters?'));
landlocked.setRight(new TreeNode('Is the state longer than 6 letters?'));
currNode = landlocked;
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']



document.getElementById("question").innerHTML = landlocked.getValue();

function submitYes(){
  setNextNode(true);
}

function submitNo(){
  setNextNode(false);
}

function setNextNode(answer) {
  if(yesinput)
    currNode = currNode.getYes();
  else
    currNode = currNode.getNo();
}
