//Students
let section1 = ["Armando", "Jose", "Fabian", "Owen", "Darty", "German", "Angel", "Hoang", "Noah", "Miles", "Alfredo", "Arthur", "Alejandro", "Chris", "Ryan", "Micah", "Dylan", "Carlos", "Leandro", "Griffin"];
let section2 = ["Claudia", "Teja", "Karen", "Zae'lasia", "Elizabeth", "Itzel", "Devin", "Lesly", "Xochitl", "Sidney", "Chelsea", "Griscelda", "Johanna", "Joi", "Giovanna", "Jackie", "Alanna", "Ashley", "Bitaniya", "Tati"];

//Generate random number
function newName(){
    let randomNum = Math.floor(Math.random()*(section1.length));
    document.getElementById('studentName').innerHTML = section1[randomNum];
}
