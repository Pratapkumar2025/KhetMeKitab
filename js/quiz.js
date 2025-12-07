// Quiz Application - Interactive NCERT Quiz
// Features: Timer, Sound Effects, Marking System, Animations

let selectedClass = null;
let selectedSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timer = null;
let timeLeft = 60;

// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Play correct answer sound
function playCorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Play wrong answer sound
function playWrongSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 200;
    oscillator.type = 'sawtooth';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Initialize quiz selection
document.addEventListener('DOMContentLoaded', function() {
    // Class selection
    const classButtons = document.querySelectorAll('.class-btn');
    classButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            classButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedClass = parseInt(this.getAttribute('data-class'));

            // Show subject selection
            document.getElementById('subject-card').style.display = 'block';
            document.getElementById('subject-card').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Subject selection
    const subjectButtons = document.querySelectorAll('.subject-btn');
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            subjectButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedSubject = this.getAttribute('data-subject');

            // Start quiz after 500ms
            setTimeout(() => startQuiz(), 500);
        });
    });

    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', retryQuiz);
    document.getElementById('new-quiz-btn').addEventListener('click', newQuiz);
});

// Start Quiz
function startQuiz() {
    if (!selectedClass || !selectedSubject) {
        alert('कृपया कक्षा और विषय चुनें! (Please select class and subject!)');
        return;
    }

    // Get questions for selected class and subject
    currentQuestions = quizData[selectedClass][selectedSubject];

    // Shuffle questions
    currentQuestions = shuffleArray([...currentQuestions]);

    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Hide selection screen and show quiz screen
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Update quiz meta info
    const subjectNames = {
        science: 'विज्ञान (Science)',
        social: 'सामाजिक विज्ञान (Social Science)',
        math: 'गणित (Math)'
    };

    document.getElementById('current-class').textContent = `कक्षा ${selectedClass}`;
    document.getElementById('current-subject').textContent = subjectNames[selectedSubject];

    // Load first question
    loadQuestion();
}

// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    // Update progress
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;

    // Display question
    document.getElementById('question-text').textContent = question.question;

    // Display options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index, optionBtn);
        optionsContainer.appendChild(optionBtn);
    });

    // Start timer
    startTimer();
}

// Start timer
function startTimer() {
    timeLeft = 60;
    document.getElementById('timer').textContent = timeLeft;
    document.getElementById('timer-fill').style.width = '100%';
    document.querySelector('.timer-container').classList.remove('warning');

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        // Update timer bar
        const percentage = (timeLeft / 60) * 100;
        document.getElementById('timer-fill').style.width = percentage + '%';

        // Warning at 10 seconds
        if (timeLeft <= 10) {
            document.querySelector('.timer-container').classList.add('warning');
        }

        // Time's up
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

// Handle timeout
function handleTimeout() {
    // Mark as skipped
    userAnswers.push({
        question: currentQuestions[currentQuestionIndex].question,
        userAnswer: null,
        correctAnswer: currentQuestions[currentQuestionIndex].correct,
        status: 'skipped'
    });

    // Disable all options
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.classList.add('disabled');
        btn.onclick = null;
    });

    // Show correct answer
    showCorrectAnswer();

    // Move to next question after 2 seconds
    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// Select option
function selectOption(optionIndex, clickedBtn) {
    // Clear timer
    clearInterval(timer);

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === question.correct;

    // Disable all option buttons
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.classList.add('disabled');
        btn.onclick = null;
    });

    // Mark selected answer
    if (isCorrect) {
        clickedBtn.classList.add('correct');
        clickedBtn.innerHTML += ' <span class="check-icon">✓</span>';
        playCorrectSound();
        score++;
    } else {
        clickedBtn.classList.add('wrong');
        clickedBtn.innerHTML += ' <span class="cross-icon">✗</span>';
        playWrongSound();

        // Show correct answer
        optionBtns[question.correct].classList.add('correct');
        optionBtns[question.correct].innerHTML += ' <span class="check-icon">✓</span>';
    }

    // Save answer
    userAnswers.push({
        question: question.question,
        userAnswer: optionIndex,
        correctAnswer: question.correct,
        options: question.options,
        status: isCorrect ? 'correct' : 'wrong'
    });

    // Show next button
    if (currentQuestionIndex < currentQuestions.length - 1) {
        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        nextBtn.onclick = nextQuestion;
    } else {
        const submitBtn = document.getElementById('submit-quiz-btn');
        submitBtn.style.display = 'block';
        submitBtn.onclick = showResults;
    }
}

// Show correct answer (for timeout cases)
function showCorrectAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    const optionBtns = document.querySelectorAll('.option-btn');

    optionBtns[question.correct].classList.add('correct');
    optionBtns[question.correct].innerHTML += ' <span class="check-icon">✓ सही जवाब</span>';
}

// Next question
function nextQuestion() {
    // Hide next button
    document.getElementById('next-btn').style.display = 'none';

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    }
}

// Show results
function showResults() {
    // Hide quiz screen
    document.getElementById('quiz-screen').style.display = 'none';

    // Show results screen
    document.getElementById('results-screen').style.display = 'block';

    // Calculate stats
    const totalQuestions = currentQuestions.length;
    const correctAnswers = userAnswers.filter(a => a.status === 'correct').length;
    const wrongAnswers = userAnswers.filter(a => a.status === 'wrong').length;
    const skippedAnswers = userAnswers.filter(a => a.status === 'skipped').length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Display score
    document.getElementById('score').textContent = correctAnswers;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('skipped-count').textContent = skippedAnswers;

    // Performance message
    let title, message;
    if (percentage >= 90) {
        title = '🌟 शानदार! (Excellent!)';
        message = 'आप बहुत अच्छे हैं! आपकी मेहनत रंग ला रही है।';
    } else if (percentage >= 70) {
        title = '👏 बहुत अच्छा! (Very Good!)';
        message = 'बढ़िया प्रदर्शन! थोड़ी और मेहनत से आप perfect हो सकते हैं।';
    } else if (percentage >= 50) {
        title = '👍 अच्छा प्रयास! (Good Effort!)';
        message = 'आप सही दिशा में हैं। और अभ्यास करते रहें।';
    } else if (percentage >= 30) {
        title = '📚 और मेहनत करें! (Work Harder!)';
        message = 'आपको और पढ़ाई करनी होगी। हार मत मानो, कोशिश करते रहो!';
    } else {
        title = '💪 फिर से कोशिश करें! (Try Again!)';
        message = 'निराश मत हो! NCERT की किताब पढ़ें और फिर से प्रयास करें।';
    }

    document.getElementById('performance-title').textContent = title;
    document.getElementById('performance-message').textContent = message;

    // Display answers review
    const answersList = document.getElementById('answers-list');
    answersList.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item';

        if (answer.status === 'correct') {
            answerItem.classList.add('correct-answer');
        } else if (answer.status === 'wrong') {
            answerItem.classList.add('wrong-answer');
        } else {
            answerItem.classList.add('skipped-answer');
        }

        let answerHTML = `
            <div class="answer-question">प्रश्न ${index + 1}: ${answer.question}</div>
            <div class="answer-details">
        `;

        if (answer.status === 'skipped') {
            answerHTML += `
                <div class="your-answer">❌ आपने छोड़ दिया (Skipped)</div>
            `;
        } else {
            answerHTML += `
                <div class="your-answer">आपका जवाब: ${answer.options[answer.userAnswer]}</div>
            `;
        }

        if (answer.status !== 'correct') {
            answerHTML += `
                <div class="correct-answer-text">✓ सही जवाब: ${answer.options[answer.correctAnswer]}</div>
            `;
        }

        answerHTML += `</div>`;
        answerItem.innerHTML = answerHTML;
        answersList.appendChild(answerItem);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Retry quiz
function retryQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Shuffle questions again
    currentQuestions = shuffleArray([...quizData[selectedClass][selectedSubject]]);

    // Hide results and show quiz
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Load first question
    loadQuestion();
}

// New quiz
function newQuiz() {
    // Reset everything
    selectedClass = null;
    selectedSubject = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Clear selections
    document.querySelectorAll('.class-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('selected'));

    // Hide subject card
    document.getElementById('subject-card').style.display = 'none';

    // Show selection screen
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('quiz-selection').style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
