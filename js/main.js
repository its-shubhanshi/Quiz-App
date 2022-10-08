const quizDB = [
    {
        question:"Q1 : What is the full form of HTML ?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"HyperText Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2 : The full form of CSS is ?",
        a:"CaseCading Style Sheets",
        b:"CaseCading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"CaseCading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q3 : An HTML document can contain _____",
        a:"Attributes",
        b:"Tags",
        c:"Raw text",
        d:"All the answers are true",
        ans:"ans4"
    },
    {
        question:"Q4 : A page designed in HTML is called _____ ?",
        a:"Application",
        b:"Cover page",
        c:"Front-end",
        d:"Web Page",
        ans:"ans4"
    },
    {   question:"Q5 :How can we change the background color of an element?",
        a:"background-color",
        b:"color",
        c:"Both a and b",
        d:"None of the above ",
        ans:"ans1"
    },
    {   question:"Q6 :In how many ways can CSS be written in?",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"ans3"
    },
    {   question:"Q7 :What type of CSS is the following code snippet?",
        a:"Inline",
        b:"Internal",
        c:"External",
        d:"None of the above",
        ans:"ans1"
    },
    {   question:"Q8 :What type of CSS is generally recommended for designing large web pages",
        a:"Inline",
        b:"Internal",
        c:"External",
        d:"None of the above",
        ans:"ans3"
    },
    {   question:"Q9 :Which HTML tag is used to declare internal CSS?",
        a:"<style>",
        b:"<link>",
        c:"<script>",
        d:"<a href='#'>",
        ans:"ans1"
    },
    {   question:"Q10 : How can we select an element with a specific Class in CSS?",
        a:"#",
        b:".",
        c:"/",
        d:"^",
        ans:"ans2"
    }
]


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showSource = document.querySelector("#showSource");

let questionCount=0;
let score=0;
const loadQuestion = ()=>{
    //console.log(quizDB[0].question);
    const questionList = quizDB[questionCount];
    question.innerHTML= questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer ;
    answers.forEach((CurrentEle)=>{
        if(CurrentEle.checked){
            answer= CurrentEle.id;
            
        }
    });
    return answer; 
}

const deselectAll = ()=>{
    answers.forEach((CurrentEle)=>CurrentEle.checked = false);
}
submit.addEventListener("click",()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer); 
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();

     if(questionCount < quizDB.length){
        loadQuestion();
     }   
     else{
        showSource.innerHTML = `
            <h3> Your scored ${score}/${quizDB.length} ✌ </h3> 
            <button class="btn" onclick="location.reload()">Play Again</button>           
        `;
        showSource.classList.remove('scoreArea');
        document.querySelector("#submit").style.display="none";
        document.querySelector(".quizques").style.display="none";
     }                      
})         