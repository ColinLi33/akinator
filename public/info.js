var arrInfo = [
    ['Alabama', 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0], ['Alaska', 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0], ['Arizona', 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], ['Arkansas', 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], ['California', 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    ['Colorado', 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], ['Connecticut', 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], ['Delaware', 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0], ['Florida', 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0], ['Georgia', 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0],
    ['Hawaii', 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], ['Idaho', 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0], ['Illinois', 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0], ['Indiana', 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0], ['Iowa', 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], ['Kansas', 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Kentucky', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], ['Louisiana', 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], ['Maine', 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0], ['Maryland', 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0], ['Massachusetts', 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    ['Michigan', 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0], ['Minnesota', 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0], ['Mississippi', 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0], ['Missouri', 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], ['Montana', 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    ['Nebraska', 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], ['Nevada', 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], ['New Hampshire', 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0], ['New Jersey', 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    ['New Mexico', 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], ['New York', 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0], ['North Carolina', 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0], ['North Dakota', 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    ['Ohio', 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0], ['Oklahoma', 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], ['Oregon', 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0], ['Pennsylvania', 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], ['Rhode Island', 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    ['South Carolina', 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0], ['South Dakota', 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], ['Tennessee', 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0], ['Texas', 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], ['Utah', 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    ['Vermont', 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], ['Virginia', 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1], ['Washington', 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], ['West Virginia', 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], ['Wisconsin', 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    ['Wyoming', 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let questionsInfo = ['Is your state landlocked (not including lakes)?', 'Does your state have a Democratic governor?', 'Is the population of your state greater than 5 million?',
	"Is the length your state's name less than 8 letters?", "Does your state border Canada?", 'Does the name of your state have 2 words?',
	'Does your state start with a vowel?', 'Does your state end with a vowel (Y is not a vowel)?', 'Does your state border the Atlantic Ocean?',
	'Does your state border a Great Lake?', 'Is your state east of the Mississippi River?', 'Does your state have a Six Flags?', 'Is your state a commonwealth?'
];
