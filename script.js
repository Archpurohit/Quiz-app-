const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

const shuffledQuestions, CureentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(){
  questionElement.innerText = question.question
}

function selectAnswer(){

}

const questions = [
  {
    question: 'what is 2 + 2? ',
    answer:[
      {text: '4', correct:true},
      {text:'3', correct:false}
    ]
  }
]