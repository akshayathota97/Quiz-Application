let questions = [
    {
        q: "Which language is used for web pages?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: 1
    },
    {
        q: "Which language is used for styling web pages?",
        options: ["CSS", "Python", "Java", "SQL"],
        answer: 0
    },
    {
        q: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: 2
    }
];

let current = 0;
let marks = 0;

function loadQuestion() {
    document.getElementById("question").innerText =
        questions[current].q;

    for (let i = 0; i < 4; i++) {
        document.getElementById("option" + i).innerText =
            questions[current].options[i];
    }
}

function checkAnswer(choice) {
    if (choice === questions[current].answer) {
        marks++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    current++;

    if (current < questions.length) {
        setTimeout(loadQuestion, 500);
    } else {
        document.getElementById("score").innerText =
            "Your score: " + marks + "/" + questions.length;
    }
}

loadQuestion();