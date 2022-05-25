let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das lateinische “carpe diem”?",
        "answer_1": "Genieße das Leben",
        "answer_2": "Nutze den Tag",
        "answer_3": "Dein Tag wird toll werden",
        "answer_4": "Man sieht sich immer zweimal im Leben",
        "right_answer": 2
    },

    {
        "question": "Welcher Pilz ist einer der giftigsten der Welt?",
        "answer_1": "Der Fliegenpilz",
        "answer_2": "Der Grüne Knollenblätterpilz",
        "answer_3": "Der Gemeine Kartoffelbovist",
        "answer_4": "Der Satansröhrling",
        "right_answer": 2
    },

    {
        "question": "Welche Gürtelfarbe existiert nicht im Kampfsport Karate?",
        "answer_1": "Schwarz",
        "answer_2": "Weiß",
        "answer_3": "Braun",
        "answer_4": "Rot",
        "right_answer": 4
    }
];

let currentQuestion = 0;
let goodAnswer = 0;
let Audio_success = new Audio('sound/succes.mp3');
let Audio_fail = new Audio('sound/loose.mp3');


function init() {
    document.getElementById('allQuestion').innerHTML = questions.length;

    showQuestion()

}


function showQuestion() {

    

    if (currentQuestion >= questions.length) {
        //endscreen
        document.getElementById('endscreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('goodanswersEndscreen').innerHTML = goodAnswer;
        document.getElementById('fromAnswersEndscreen').innerHTML = questions.length;
        document.getElementById('imgonscreen').src = 'img/win.png';

    }
    else {
        // show question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress_bar').innerHTML = `${percent} %`;
        document.getElementById('progress_bar').style = `width: ${percent}%`;




        let question = questions[currentQuestion];

        document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        Audio_success.play();
        goodAnswer++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        Audio_fail.play();
    }
    
    document.getElementById('next-button').disabled = false;
    disableButtons();

}

function nextQuestion() {
    currentQuestion++;
    
    showQuestion();

    document.getElementById('next-button').disabled = true;
    
    resetAnswerButtons();
    enableButtons();

}

function resetAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}

function restartGame() {
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('questionBody').style = '';

    document.getElementById('imgonscreen').src = 'img/quiz.jpg';
    currentQuestion = 0;
    goodAnswer = 0;
    init();
}

function enableButtons() {

    document.getElementById('answer1').style.pointerEvents = 'auto';
    document.getElementById('answer2').style.pointerEvents = 'auto';
    document.getElementById('answer3').style.pointerEvents = 'auto';
    document.getElementById('answer4').style.pointerEvents = 'auto';
}

function disableButtons() {

    document.getElementById('answer1').style.pointerEvents = 'none';
    document.getElementById('answer2').style.pointerEvents = 'none';
    document.getElementById('answer3').style.pointerEvents = 'none';
    document.getElementById('answer4').style.pointerEvents = 'none';
}