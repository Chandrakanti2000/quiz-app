const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

const submit = document.getElementById("submit");
const previous = document.getElementById("previous");
const correctAnswersList = document.getElementById("correctAnswers");

let currentQuestion = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
  question.textContent = quiz[currentQuestion].question;
  option_a.textContent = quiz[currentQuestion].ans1text;
  option_b.textContent = quiz[currentQuestion].ans2text;
  option_c.textContent = quiz[currentQuestion].ans3text;
  option_d.textContent = quiz[currentQuestion].ans4text;
}

// Load the first question initially
loadQuestion();

// Add event listener for submit button
submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');

  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quiz.length) {
      loadQuestion();
      checkedAns.checked = false;
      if (currentQuestion > 0) previous.style.display = "inline-block";
    } else {
      alert("Your score is " + score + " out of " + quiz.length);
      displayCorrectAnswers();
      previous.style.display = "none";
      submit.style.display = "none";
    }
  }
});

// Add event listener for previous button
previous.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }

  if (currentQuestion === 0) previous.style.display = "none";
});

// Function to display the list of correct answers
function displayCorrectAnswers() {
  correctAnswersList.style.display = "block";
  correctAnswersList.innerHTML = "<h3>Correct Answers:</h3>";

  quiz.forEach((q, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${q.question} - Correct Answer: ${q.answer}`;
    correctAnswersList.appendChild(li);
  });
}
