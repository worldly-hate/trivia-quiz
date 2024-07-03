let questions = [
    {
      text: "What is the capital of France?",
      answers: ["Berlin", "Paris", "London", "Rome"],
      correctAnswer: 1
    },
    {
      text: "Which planet is known as the 'Red Planet'?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    }
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.text;
    const answerOptionsHTML = question.answers.map((answer, index) => {
      return `<div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="answer-${index}">
        <label class="form-check-label" for="answer-${index}">${answer}</label>
      </div>`;
    }).join("");
    document.getElementById("answer-options").innerHTML = answerOptionsHTML;
  }
  
  function nextQuestion() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');
    if (userAnswer) {
      const userAnswerIndex = parseInt(userAnswer.id.split('-')[1]);
      if (userAnswerIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
      }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      showResultModal();
    } else {
      loadQuestion();
    }
  }
  
  function showResultModal() {
    const resultModal = document.getElementById("result-modal");
    resultModal.classList.add("show");
    const resultTitle = document.getElementById("result-title");
    const resultMessage = document.getElementById("result-message");
    if (score >= questions.length / 2) {
      resultTitle.textContent = "Congratulations!";
      resultMessage.textContent = `You scored ${score} out of ${questions.length}!`;
    } else {
      resultTitle.textContent = "Better luck next time!";
      resultMessage.textContent = `You scored ${score} out of ${questions.length}. Try again!`;
    }
  }
  
  loadQuestion();
  
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  