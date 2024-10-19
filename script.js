const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which programming language is primarily used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Which is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "J.K. Rowling",
        c: "Ernest Hemingway",
        d: "Mark Twain",
        correct: "a"
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        a: "Brazil",
        b: "China",
        c: "Russia",
        d: "USA",
        correct: "a"
    }
];

let currentQuiz = 0; // Tracks the current quiz question
let score = 0; // Keeps track of the user's score

const questionEl = document.getElementById('question'); // Fetches the question element
const optionA = document.getElementById('option_1');
const optionB = document.getElementById('option_2');
const optionC = document.getElementById('option_3');
const optionD = document.getElementById('option_4');
const submitBtn = document.getElementById('submit'); // Submit button for submitting answers
const answers = document.querySelectorAll('.answer'); // All answer radio buttons

// Load quiz questions and answers
function loadQuiz() {
    deselectAnswers(); // Clear previous selections

    const currentQuizData = quizData[currentQuiz]; // Get data for the current question

    questionEl.innerText = currentQuizData.question; // Set question text
    optionA.innerText = currentQuizData.a; // Set option A
    optionB.innerText = currentQuizData.b; // Set option B
    optionC.innerText = currentQuizData.c; // Set option C
    optionD.innerText = currentQuizData.d; // Set option D
}

// Deselect previously selected answers
function deselectAnswers() {
    answers.forEach(answer => answer.checked = false); // Uncheck all answer options
}

// Get the selected answer
function getSelected() {
    let answer;
    answers.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id; // Return the ID of the selected answer
        }
    });
    return answer;
}

// Submit the answer and go to the next question
submitBtn.addEventListener('click', () => {
    const answer = getSelected(); // Fetch the user's selected answer

    if (answer) { // If an answer is selected
        if (answer === quizData[currentQuiz].correct) { // Check if the answer is correct
            score++; // Increase score if correct
        }

        currentQuiz++; // Move to the next question

        if (currentQuiz < quizData.length) { // If more questions remain, load the next
            loadQuiz();
        } else {
            // Show final score when quiz ends
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

// Initialize the quiz
loadQuiz(); // Call the function to start the quiz