const input = require("readline-sync");

let name = "";
let survey = ['Where did you grow up? ','What is your DJ name? ','What is your favorite cereal? '];
let question = 'Do you have a pet? ';
let myResponse = ['StL','DJ ZoZoOoey', 'Chex'];
let answers = ['','',''];
let havePet = '';

console.log('running survey');

function askForName(){
    let answer = input.question("What's your name? ");
    name = answer;
    return name;
}

function askQuestion(){
    let response = input.question(question);
    havePet = response;
    return havePet;

}

function takeSurvey(){
    for (let i = 0; i <= survey.length; i++){
        let answer = input.question(survey[i]);
        if(answer == myResponse[i]){
            console.log("Hey that's so cool, Me too!!")
        }else{console.log("that's cool I guess")};

    }
}

function runSurvey(){
    askForName();
    console.log("SUP, " + name + "?");
    takeSurvey();
    askQuestion();
    console.log(havePet);
}

module.exports = {
    havePet: havePet,
    askQuestion: askQuestion,
    name: name,
    survey: survey,
    myResponse: myResponse,
    answers: answers,
    runSurvey: runSurvey
};