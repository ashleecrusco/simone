let store = {apps: []}

class App {
  constructor(){
  this.score = 0
  this.name = ''
  this.addEventListeners()
  this.onStart()
  }

  addEventListeners(){

  }

  onStart() {
    let pattern = []
    let el;
    document.querySelector('.instruction').removeAttribute('class', 'instruction')
    this.generateAnswer(pattern)
    if (document.getElementById('scoreboard')){
      el = document.getElementById('scoreboard')
    } else {
      let bar = document.querySelector('div.container')
      el = document.createElement('div')
      bar.prepend(el)
    }
    el.id = "scoreboard"
    el.innerHTML = `Score: ${this.score}`
    el.style.color = 'white'
  }

  generateAnswer(pattern){
    let arr = ['green','red','yellow','blue']
    let index = Math.floor(Math.random() * 4)
    let choice = arr[index]
    pattern.push(choice)
    function showPattern(i){
      if (i < pattern.length){
       setTimeout(function(){
         change(pattern[i])
         play(pattern[i])
       },500);
        setTimeout(function(){
         changeBack(pattern[i])
         i++;
         showPattern(i);
       },1000);
     }else {
       document.getElementById('center').removeAttribute('class', 'active')
     }
    }
    document.getElementById('center').setAttribute('class', 'active')
    showPattern(0)
    Promise.resolve().then(this.generateResponse(pattern))
  }

  generateResponse(pattern){
    let int = (2000+(pattern.length * 1700))
    let response = []
    let string = ''
    document.addEventListener('keydown', (ev) => {
      if (response.length < pattern.length){
        let color = checkColor(ev.key)
        ev.preventDefault()
        response.push(ev.key)
        if (color === "x"){
          string += `<span class='x' style='color: red;'></span>`
        } else {
        string += `<span class='circle' style='color: ${color};'></span>`
        play(color)
        }
        document.getElementById('header').innerHTML = string
      }
  })
  let self = this
  setTimeout(function(){ self.checkResponse(pattern,response); }, int);
  }

  checkResponse(pattern, response) {
    document.getElementById('header').innerHTML = ''
    let decodedPattern = []
    pattern.forEach((choice) => {
      if(choice === 'red'){
        decodedPattern.push('ArrowLeft')
      }
      if(choice === 'blue'){
        decodedPattern.push('ArrowDown')
      }
      if(choice === 'yellow'){
        decodedPattern.push('ArrowRight')
      }
      if(choice === 'green'){
        decodedPattern.push('ArrowUp')
      }
    })

    if (decodedPattern.join() === response.join()){
      this.score += 10
      let el = document.getElementById('scoreboard')
      el.innerHTML = `Score: ${this.score}`
      this.generateAnswer(pattern)
    } else {
      this.gameOver()
    }
  }

  gameOver(){
    document.getElementById('title').innerHTML = `<h1 class="large blink">YOU LOSE!</h1>`
    
    let gameOverAudio = document.getElementById('gameOverAudio');
    gameOverAudio.play();

    let table = document.getElementById('board')
    // this.name = prompt()

    //get initials
    //send to API


    store.apps.push(this)

  }

}

function play(color) {
  if(color === 'red'){
    let redAudio = document.getElementById('redAudio');
    redAudio.play();
  }

  if(color === 'blue'){
    let blueAudio = document.getElementById('blueAudio');
    blueAudio.play();
  }

  if(color === 'yellow'){
    let yellowAudio = document.getElementById('greenAudio');
    yellowAudio.play();
  }

  if(color === 'green'){
    let greenAudio = document.getElementById('yellowAudio');
    greenAudio.play();
  }
}

function change(element){
  document.getElementById(element).className = 'choice selected'
}

function changeBack(element){
  document.getElementById(element).className = 'choice'
}
