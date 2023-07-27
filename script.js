const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
const shuffledElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, CureentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
  currentQuestionIndex++
  setNextQuestion()
})


function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(){
  questionElement.innerText = question.question
  question.answer.forEach(answer=> {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct= answer.correct}
      button.addEventListener('click', selectAnswer)
      answerButtonElement.appendChild(button)
  });
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonElement.firstChild){
    answerButtonElement.removeChild
    (answerButtonElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length> currentQuestionIndex + 1){

    nextButton.classList.remove('hide')
  } else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'what is 2 + 2? ',
    answer:[
      {text: '4', correct:true},
      {text:'3', correct:false}
    ]
  },

  {
    question: 'what is 4 * 2? ',
    answer:[
      {text: '8', correct:true},
      {text:'9', correct:false}
    ]
  }
]