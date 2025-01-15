document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correct: 1
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correct: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Osmium", "Ozone", "Opium"],
            correct: 0
        }
    ];

    const answerElm = document.querySelectorAll(".answer");
    const questionElm = document.getElementById("question");
    const option_1 = document.getElementById("option_1");
    const option_2 = document.getElementById("option_2");
    const option_3 = document.getElementById("option_3");
    const option_4 = document.getElementById("option_4");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    const loadQuiz = () => {
        const { question, options } = quizData[currentQuiz];
        questionElm.innerText = question;
        options.forEach((curOption, index) => {
            const optionLabel = document.getElementById(`option_${index + 1}`);
            if (optionLabel) {
                optionLabel.innerText = curOption;
            }
        });
    };

    const getSelectedAnswer = () => {
        let selectedAnswer = undefined;
        answerElm.forEach((answer) => {
            if (answer.checked) {
                selectedAnswer = parseInt(answer.id.slice(1)) - 1; // Extracts the option index (0 to 3)
            }
        });
        return selectedAnswer;
    };

    const deselectAnswers = () => {
        answerElm.forEach((answer) => {
            answer.checked = false;
        });
    };

    submitBtn.addEventListener("click", () => {
        const selectedAnswer = getSelectedAnswer();


        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
            deselectAnswers();
        } else {
            alert(`Quiz finished! Your score is ${score}/${quizData.length}`);
        }
    });
    loadQuiz();
});
