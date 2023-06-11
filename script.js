
// for my guide page 
const continuebtn = document.querySelector(".continue")
// quize section 
const quiz = document.querySelector(".quize");

// the question section 
const questionNO = document.querySelector(".questionNO");
const questiontext = document.querySelector(".questiontext");


// th multy choice section 
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");

//  now we correct button and the next button 
const total_correct = document.querySelector(".total_correct");
const nexquestion = document.querySelector(".nexquestion");


// result of the studen who answer the question and passed
const result = document.querySelector(".result");
const display = document.querySelector(".display");
const button = document.querySelector(".button");

// get all questions setting

const choice_ques = document.querySelectorAll(".choice_ques")



// now we write a program that can load the massage once the next button is clicked 
let index = 0;

// point
var scoreCounter = 0;
// user answer 
let useranswer = undefined;

let MCQS = [{
    
    question: "A is for what",
    choice1: "apple",
    choice2: "goat",
    choice3: "Elephant",
    anwser:"apple"
},
{
    question: "What does BBC stand for?",
    choice1: "British Broadcasting Corporation",
    choice2: "Broadcasting British condition",
    choice3: "British Brief coperation ",
    anwser: "British Broadcasting Corporation"
},
{
    question: "What element does 'O' represent on the periodic table?",
    choice1: "OITROGEN",
    choice2: "OXYGEN",
    choice3: "Orbit",
    anwser: "OXYGEN"
},
{
    question: "What's the name of the river that runs through Egypt?",
    choice1: "IMO RIVER ",
    choice2: "The Nile",
    choice3: "River niger",
    anwser:"The Nile"
},
{
    question: "What's the highest mountain in the world?",
    choice1: "Arab Mountian",
    choice2: "SINE Mountain",
    choice3: "Mount Everest",
    anwser: "Mount Everest"
},
{
    question: "What year did World War II end?",
    choice1: "1945",
    choice2: "1954",
    choice3: "1955",
    anwser: "1945"
},
{
    question: "How many letters in the word hippopotamus?",
    choice1: "12!",
    choice2: "11!",
    choice3: "13",
    anwser: "12!"
},
{
    question: "What is the largest muscle in the body?",
    choice1: "The cluteus maximus",
    choice2: "The gluteus maximus",
    choice3: "The gluteux",
    anwser: "The gluteus maximus"
},
{
    question: "What famous battle happened in 1066",
    choice1: "The Suffering Battle",
    choice2: "The Battle Of Hustles",
    choice3: "The Battle Of Hastings",
    anwser: "The Battle Of Hastings"
},
{
    question: "How many days are in a leap year?",
    choice1: "356",
    choice2: "365",
    choice3: "366",
    anwser: "366"
},
{
    question: "Which vegetable is a pickle?",
    choice1: "Garbage",
    choice2: "Cucumber",
    choice3: "Carrot",
    anwser: "Cucumber"
},


{
    question: "Where did the Olympics originally start",
    choice1: "Greece",
    choice2: "Greenland",
    choice3: "Greek",
    anwser: "Greece"
},

{
    question: "Which animal is the biggest?",
    choice1: "Blue whale",
    choice2: "Elphant",
    choice3: "Bull",
    anwser: "Blue whale"
},
{
    question: "Which vegetable is a pickle?",
    choice1: "Garbage",
    choice2: "Cucumber",
    choice3: "Carrot",
    anwser: "Cucumber"
},
{
    question: "What do snakes use to smell?",
    choice1: "Their tongue",
    choice2: "Their mouth",
    choice3: "Their nose",
    anwser: "Their tongue"
},
{
    question: " Which animal has the strongest bite?",
    choice1: "Lion",
    choice2: "Hippopotamus",
    choice3: "Shark",
    anwser: "Hippopotamus"
},
{
    question: "What is the name of a baby goat?",
    choice1: "kid",
    choice2: "Kit",
    choice3: "Baby goat",
    anwser:"kid"
},
{
    question: "Where do kangaroos live?",
    choice1: "Asia",
    choice2: "London",
    choice3: "Australia",
    anwser: "Australia"
},
{
    question: "What was the first capital city in America?",
    choice1: "los Angeles",
    choice2: " Ahiladelphia",
    choice3: " Philadelphia",
    anwser: " Philadelphia"




}, 
{
    question: "Where does the President of the United States live?",
    choice1: "The house of peace ",
    choice2: "The united state",
    choice3: "The White House",
    anwser: "The White House"




},];


//  we write a program that load the question 
let loadDate = () => {
    questionNO.innerHTML = index + 1 + ".";
    questiontext.innerHTML = MCQS[index].question;
    option1.innerHTML = MCQS[index].choice1;
    option2.innerHTML = MCQS[index].choice2;
    option3.innerHTML = MCQS[index].choice3;
}

loadDate();

choice_ques.forEach((choices) => {

    choices.addEventListener("click", () => {
        choices.classList.add('active');
        for (let x in MCQS) {
            if (MCQS[x].anwser == choices.innerHTML) {
                // the increament of the page 
                scoreCounter+=5
            }
            else {
                
              
                scoreCounter += 0;
            }
    
          }
        
        // for (i = 0; i <= 3; i++) {
        //     choice_ques[i].classList.add("disabled")
        // }
    })
});



// what happens when we enter a next button
nexquestion.addEventListener("click", () => {
    if (index !== MCQS.length - 1) {
        index++;
        choice_ques.forEach(removeActive => {
            removeActive.classList.remove("active");
        })
    };
    
    loadDate();

    // result
    total_correct.style.display = "block";
    total_correct.innerHTML = ` You got ${scoreCounter} Points  out of the  ${MCQS.length} Question`;
})



