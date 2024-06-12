

//questions laver en array hvor jeg kan have dataen fra json 
//currentquestionindex holder øje med spørgsmplende der bliver vist
// selections er en array til have dataen om hvad brugeren har valgt

let questions = [];
let currentQuestionIndex = 0;
let selections = [];



//Her henter jeg spørgsmålende og få dem i et array 
//og giver dem deres værdier som starter i null

async function fetchQuestions() {
    try {
        const response = await fetch('data.json');
        questions = await response.json();
        selections = new Array(questions.length).fill(null);
        initializeSurvey();
    } catch (error) {
        console.error('Failed to fetch questions:', error);
    }
}

//Starter surveyen og får navigations buttons til at virke
// og min progress bar til at opdatere sammen med buttons

function initializeSurvey() {
    showQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
}


// fjerner spørgsmål fra question-container elementet
// Og henter det nuværende spørgsmål array
// Skaber og viser spørsmålende 
// Skaber også en click event for når man selecter noget

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    const questionData = questions[index];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<h2>${questionData.question}</h2>`;
    questionData.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = `option ${selections[index] === i ? 'selected' : ''}`;
        optionElement.innerHTML = `<img src="${option}" alt="Option ${i + 1}">`;
        optionElement.onclick = () => selectOption(index, i);
        questionElement.appendChild(optionElement);
    });
    questionContainer.appendChild(questionElement);
    questionElement.style.display = 'block';
}

//opdatere selection array og refreshes 

function selectOption(questionIndex, optionIndex) {
    selections[questionIndex] = optionIndex;
    showQuestion(questionIndex);
}

//opdatere progressbar

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

//next for den til at gå til den næste hvis der er mere
//previous får den til at gå tilbage hvis det ikke er den første

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
    updateNavigationButtons();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
    updateNavigationButtons();
}

// enabler og deaktivere navigations buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

// Fetch questions and initialize survey
fetchQuestions();
