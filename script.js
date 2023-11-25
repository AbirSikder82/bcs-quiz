// script.js

let userScore = 0;
let currentQuestionIndex = 0;
let currentCategory;
let allCorrectAnswer = "";

// Define your questions for each category
const categories = {
    general: [
        {
            text: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Dhaka', 'Paris'],
            correctAnswer: 'Paris'
        },
        {
            text: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter'],
            correctAnswer: 'Mars'
        },
        {
            text: 'Who was the first President of the United States?',
            options: ['John Adams', 'Thomas Jefferson', 'George Washington'],
            correctAnswer: 'George Washington'
        },
        {
            text: 'Which element has the chemical symbol "O"?',
            options: ['Oxygen', 'Osmium', 'Opium'],
            correctAnswer: 'Oxygen'
        },
        // Add more questions for the "general" category as needed
    ],
    science: [
        {
            text: 'ddddWhat is the capital of France?',
            options: ['Berlin', 'Madrid', 'Dhaka', 'Paris'],
            correctAnswer: 'Paris'
        },
        {
            text: 'gfgfgWhich planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter'],
            correctAnswer: 'Mars'
        },
        {
            text: 'fgfgWho was the first President of the United States?',
            options: ['John Adams', 'Thomas Jefferson', 'George Washington'],
            correctAnswer: 'George Washington'
        },
        {
            text: 'Which element has the chemical symbol "O"?',
            options: ['Oxygen', 'Osmium', 'Opium'],
            correctAnswer: 'Oxygen'
        },
        // Add more questions for the "science" category as needed
    ],
    sports: [
        {
            text: 'ddddWhat is the capital of France?',
            options: ['Berlin', 'Madrid', 'Dhaka', 'Paris'],
            correctAnswer: 'Paris'
        },
        {
            text: 'gfgfgWhich planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter'],
            correctAnswer: 'Mars'
        },
        {
            text: 'fgfgWho was the first President of the United States?',
            options: ['John Adams', 'Thomas Jefferson', 'George Washington'],
            correctAnswer: 'George Washington'
        },
        {
            text: 'Which element has the chemical symbol "O"?',
            options: ['Oxygen', 'Osmium', 'Opium'],
            correctAnswer: 'Oxygen'
        },
        // Add more questions for the "sports" category as needed
    ],
    // Add more categories and questions as needed
};

function nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    const correctAnswerText = document.querySelector(`#question${currentQuestionIndex + 1} .correct-answer`);

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        if (userAnswer === categories[currentCategory][currentQuestionIndex].correctAnswer) {
            userScore++;
        }
        //correctAnswerText.textContent = `Correct Answer: ${categories[currentCategory][currentQuestionIndex].correctAnswer}`;
        allCorrectAnswer += `Question ${currentQuestionIndex + 1}: ${categories[currentCategory][currentQuestionIndex].correctAnswer}`;
        //correctAnswerText.style.display = 'block';
    } else {
        correctAnswerText.textContent = 'You did not answer this question.';
        correctAnswerText.style.display = 'block';
    }

    currentQuestionIndex++;

    // If there are more questions, load the next question
    if (currentQuestionIndex < categories[currentCategory].length) {
       loadQuestion();
    } else {
        // All questions answered, display score
        document.getElementById('scoreText').textContent = `Your Score: ${userScore}`;
        document.getElementById('scoreSection').style.display = 'block';
    }
}

function loadQuestion() {
    const questionSection = document.getElementById('questionSection');
    questionSection.innerHTML = ' ';

    // Load the current question dynamically
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    questionContainer.id = `question${currentQuestionIndex + 1}`;

    // Add question text
    const questionText = document.createElement('p');
    questionText.classList.add('question');
    questionText.textContent = `${currentQuestionIndex + 1}. ${categories[currentCategory][currentQuestionIndex].text}`;
    
    console.log(categories[currentCategory][currentQuestionIndex].text);
    questionContainer.appendChild(questionText);

    // Add options
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');

    categories[currentCategory][currentQuestionIndex].options.forEach((option, optionIndex) => {
        const optionItem = document.createElement('li');
        optionItem.innerHTML = `<label><input type="radio" name="q${currentQuestionIndex + 1}" value="${option}"> ${option}</label>`;
        optionsList.appendChild(optionItem);
    });

    questionContainer.appendChild(optionsList);

    // Add correct answer (for review purposes)
    const correctAnswerText = document.createElement('p');
    correctAnswerText.classList.add('correct-answer');
    correctAnswerText.style.display = 'none';
    questionContainer.appendChild(correctAnswerText);

    // Append the question container to the question section
    questionSection.appendChild(questionContainer);
}

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    userScore = 0;

    // Load the first question
    
    loadQuestion();

    // Hide score section
    document.getElementById('scoreSection').style.display = 'none';
}

// Load questions when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam && categories.hasOwnProperty(categoryParam)) {
        
        startQuiz(categoryParam);
    }
});