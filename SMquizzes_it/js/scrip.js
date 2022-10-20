// getting all required elements

const start_btn = document.querySelector(".start_btn button");

const info_box = document.querySelector(".info_box");
const quit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");

const quiz_box = document.querySelector(".quiz_box");
const prev_btn = quiz_box.querySelector(".prev_btn");
const next_btn = quiz_box.querySelector(".next_btn");
const option_list = quiz_box.querySelector(".option_list");

const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


// If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}
 
// If Quit Quiz Button Clicked
quit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

// If Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0);
    queCounter(1);
    ansCounter(0);
    next_btn.style.display = "block";
    prev_btn.style.display = "block";
}

let que_count = 0;
let ans_count = 0;
let counter;
let userScore = 0;
let given_ans = Array(questions.length).fill(-1);

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = questions.length-1;
    showQuestions(que_count);
    queCounter(que_count+1);
    ansCounter(ans_count);
    next_btn.style.display = "block";
    prev_btn.style.display = "block";
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

// If Next Button Clicked
next_btn.onclick = ()=>{
    que_count++;

    if(que_count==questions.length && ans_count==questions.length){
        showResultBox();
    } 

    if(que_count == questions.length-1 && ans_count<questions.length){
        next_btn.style.display = "none";
    } else {
        next_btn.style.display = "block";
    }

    showQuestions(que_count);
    queCounter(que_count+1);

    if(que_count==0) {
        prev_btn.style.display = "none";
    } else {
        prev_btn.style.display = "block";
    }

}
 
// If Prev Button Clicked
prev_btn.onclick = ()=>{
    que_count--;
    if(que_count < 0)
        que_count = 0;
    showQuestions(que_count);
    queCounter(que_count+1);

    if(que_count==0) {
        prev_btn.style.display = "none";
        next_btn.style.display = "block";
    } else {
        prev_btn.style.display = "block";
        next_btn.style.display = "block";
    }
}

// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

    if(given_ans[index] != -1)
        showSelection();
}

let tickIcon = '<div class="icon tick"><i class="fa fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa fa-times"></i></div>'; 

function optionSelected(answer) {
    ans_count++;
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    for (let i = 0; i < allOptions; i++) {
        if(userAns == questions[que_count].options[i])
            given_ans[que_count] = i;
    }

    if(userAns == correctAns) {
        userScore += 1;
        console.log("Answer is correct");
    } else {
        console.log("Answer is wrong");
    }
    console.log(userScore);

    showSelection();

    if(ans_count==questions.length){
        showResultBox();
    }
}

function showSelection() {
    const option = option_list.querySelectorAll(".option");
    const given_answer = option[given_ans[que_count]];
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(questions[que_count].options[given_ans[que_count]] == correctAns) {
        given_answer.classList.add("correct");
        // given_answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        given_answer.classList.add("incorrect");
        // given_answer.insertAdjacentHTML("beforeend", crossIcon);

        // if answer is incorrect then highlight the correct answer 
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                // option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    
    }

    // once user selected disable all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");        
    }

    ansCounter(ans_count);    
}

function showResultBox() {
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.remove("activeQuiz"); //show the quiz box
    result_box.classList.add("activeResult"); //show the result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= Math.round(questions.length*2/3)) {
        let scoreTag = '<span>and congrats! You got <p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > Math.round(questions.length*1/3)) {
        let scoreTag = '<span>and nice, You got <p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p>out of<p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
        
}

function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function ansCounter(index) {
    const bottom_ans_counter = quiz_box.querySelector(".total_ans");
    let totalAnsCountTag = '<span><p>'+ index +'</p>of<p>' + questions.length + '</p>Answers</span>';
    bottom_ans_counter.innerHTML = totalAnsCountTag;
}