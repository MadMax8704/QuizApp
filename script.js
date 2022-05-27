let questions = [

    {
        "question": "Wi viele Speler spielt auf einmal in einer Wettkampf?",
        "answer_1": "3",
        "answer_2": "4",
        "answer_3": "5",
        "answer_4": "6",
        "right_answer": 3,
        "img":  "img/q1.jpg"
    },

    {
        "question": "Auf welche Karte spielt kann man die Geisel retten?",
        "answer_1": "Dust2",
        "answer_2": "Office",
        "answer_3": "Nuke",
        "answer_4": "Inferno",
        "right_answer": 2,
        "img":  "img/q2.png"
    },

    {
        "question": "Welcher Taktik ist die belibste von Russischen Spielern?",
        "answer_1": "Only Pistol!",
        "answer_2": "Rush B!",
        "answer_3": "Warten 30 sec am Spawn.",
        "answer_4": "Rush A!",
        "right_answer": 2,
        "img":  "img/q3.png"
    },

    {
        "question": "Wie viele Kugel passt in der Magazine ven P90 rein?",
        "answer_1": "120",
        "answer_2": "30",
        "answer_3": "25",
        "answer_4": "50",
        "right_answer": 4,
        "img":  "img/q4.jpg"
    },

    {
        "question": "Welche ist der stärkste Waffe in der Liste?",
        "answer_1": "AWP",
        "answer_2": "Negev",
        "answer_3": "Desert Eagle",
        "answer_4": "Mac",
        "right_answer": 1,
        "img":  "img/q5.jpg"
    }
];

let currentQuestion = 0;
let goodAnswer = 0;
let Audio_success = new Audio('sound/good answer.mp3');
let Audio_fail = new Audio('sound/bad answer.mp3');
let Audio_Next_Question = new Audio('sound/click.mp3')
let Audio_Win = new Audio('sound/win.mp3')
let Audio_Loose = new Audio('sound/loose.mp3')

function init() {
    document.getElementById('allQuestion').innerHTML = questions.length;

    showQuestion()

}


function showQuestion() {

    if (gameisOver()) {
        showEndscrren();
    }
    else {
        updateProgressbar();
        showNextQustion();
    }
}

function gameisOver() {
    return currentQuestion >= questions.length;
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

    setTimeout(showButton, 2200);
    disableButtons();

}

function showButton() {
    document.getElementById('next-button').disabled = false;

}



function nextQuestion() {
    currentQuestion++;
    Audio_Next_Question.play();
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

function showEndscrren() {

    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('goodanswersEndscreen').innerHTML = goodAnswer;
    document.getElementById('fromAnswersEndscreen').innerHTML = questions.length;
    
    if (goodAnswer <= 3) {
        document.getElementById('resultLevel').innerHTML = "Noob! Leider kennst du dich mit CS:GO nicht so gut aus! <br> Versuche es noch einmal!";
        document.getElementById('imgonscreen').src = 'img/looser.jpg';
        Audio_Loose.play();
    }

     if (goodAnswer > 3) {
        document.getElementById('resultLevel').innerHTML = "Wow! Du bist eine richtige CS:GO fun!";
        document.getElementById('imgonscreen').src = 'img/winner1.jpg';
        Audio_Win.play();
    }


}

function showNextQustion() {

    

    let question = questions[currentQuestion];
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('imgonscreen').src = question['img'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function updateProgressbar() {

    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress_bar').innerHTML = `${percent} %`;
    document.getElementById('progress_bar').style = `width: ${percent}%`;

}