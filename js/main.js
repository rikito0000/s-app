const quiz = [
  {
    question: '問題',
    answers: [
      '回答1',
      '回答2',
      '回答3',
      '回答4'
    ],
    correct: '回答2'
  },
  {
    question: '問題2',
    answers: [
      '回答1',
      '回答2',
      '回答3',
      '回答4'
    ],
    correct: '回答4'
  },
  {
    question: '問題3',
    answers: [
      '回答1',
      '回答2',
      '回答3',
      '回答4'
    ],
    correct: '回答3'
  },
];

const quizLength = quiz.length
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length


const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

/*
const setup = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
 while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}

}
*/

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('correct');
    score++;
  } else {
    window.alert('incorrect');
  }

  /*
  
   const clickHandler = (e) => {
     if (quiz[quizIndex].correct === e.target.textContent) {
       window.alert('correct');
       score++;
     } else {
       window.alert('incorrect');
     }
   }
   */

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了あなたのせい回数は' + score);

  }



  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    });

    handlerIndex++;
  }

/*

  let handlerIndex = 0;
  while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    })
  }
*/
