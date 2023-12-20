const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '35',
    c: '46',
    d: '110',
    correct: 'c'
  }, {
    question: 'What is the most used programming language in 2019',
    a: 'java',
    b: 'c',
    c: 'python',
    d: 'javaScript',
    correct: 'd'
  }, {
    question: 'who is he president of US',
    a: 'Florin pop',
    b: 'Donald Trump',
    c: "Joe Biden",
    d: 'Mihai Andrei',
    correct: 'c'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Lannguage',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helecopter Programming interface',
    correct: 'a'
  }, {
    question: 'What year was JavaScript launched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd'
  }

]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  let answer = undefined;

  answerEls.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerE1) => {
    answerE1.checked = false;

  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer

  const answer = getSelected();
  console.log(answer);


  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered corrctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`;
    }

  }
});