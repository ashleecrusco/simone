let store = {apps: []}
let id = 0
let multiplier = 1;

class App {
  constructor(){
  this.score = 0
  this.name = ''
  this.onStart()
  }


  onStart() {
    this.config_id = document.getElementById('configChoice').value
    checkConfig(this)
    let pattern = []
    let el;
    if(document.querySelector('.instruction')){
    document.querySelector('.instruction').removeAttribute('class', 'instruction')
  }

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
    setTimeout(function () {
      document.getElementById('center').innerHTML = ""
    }, 500)
    let arr = ['green','red','yellow','blue']
    let index = Math.floor(Math.random() * 4)
    let choice = arr[index]
    pattern.push(choice)



    function showPattern(i){
      if (i < pattern.length){
       setTimeout(function(){
         change(pattern[i])
         play(pattern[i])
       },500 * multiplier);
        setTimeout(function(){
         changeBack(pattern[i])
         i++;
         showPattern(i);
       },1000 * multiplier);
     }else {
       document.getElementById('center').removeAttribute('class', 'active')
     }
    }
    document.getElementById('center').setAttribute('class', 'active')
    showPattern(0)

    Promise.resolve().then(this.generateResponse(pattern))
  }

  generateResponse(pattern){
    let int = (2000 * multiplier +(pattern.length * 1700 * multiplier))
    let response = []
    let string = ''
    document.addEventListener('keydown', something)

    function something() {

      if (response.length < pattern.length){
        let color = checkColor(event.key)
        event.preventDefault()
        response.push(event.key)
        if (color === "x"){
          string += `<span class='x' style='color: red;'></span>`
        } else {
        string += `<span class='circle' style='color: ${color};'></span>`
        play(color)
        }
        document.getElementById('header').innerHTML = string
      }
    }


    let self = this
    setTimeout(function(){ self.checkResponse(pattern,response, something); }, int);

  }

  checkResponse(pattern, response, something) {
    document.removeEventListener('keydown', something)
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
      document.getElementById('center').innerHTML = "<h1 class='center'>+10</h1>"
      let el = document.getElementById('scoreboard')
      el.innerHTML = `Score: ${this.score}`
      this.generateAnswer(pattern)
    } else {
      this.gameOver()
    }
  }

  gameOver(){
    document.getElementById('start').innerText = "HOME"
    document.getElementById('configChoice').disabled = true
    document.getElementById('configChoice').className = "fade"
    document.getElementById('board').innerHTML = ""
    if(document.getElementById('leaderboard').innerHTML === "") {
      document.getElementById('title').innerHTML = `
      <h1 class="large blink">YOU LOSE!</h1>
      <form id="nameSubmit"><p>Enter your initials for the leaderboard: </p><input id="name" value="" placeholder="Name"></input>
      <input type="submit" value="Submit"></form>
      `
    }

    let gameOverAudio = document.getElementById('gameOverAudio');
    gameOverAudio.play();

    let table = document.getElementById('board')
    let config = document.getElementById('configChoice').value
    let self = this
    this.config_id = config

    document.getElementById('nameSubmit').addEventListener('submit', (ev) => {
      let name = document.getElementById('name').value
      document.getElementById('name').value = ""
      ev.preventDefault()
      self.name = name.toUpperCase().slice(0,3)
      store.apps.push(self)
      self.sendData()
    })
  }
  sendData(){
    let data = this
    fetch(`https://simone-api.herokuapp.com/api/v1/configs/${this.config_id}/apps`,
  {
    method: 'POST',
    // mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  })
  .then(res => doStuff());
    // this.fetchLeaderboard()

  }

}


// Outside class

function doStuff() {
  onLeader()
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

function checkConfig(self){
  if (self.config_id === "2"){
    multiplier = .75
  } else if (self.config_id === "3") {
    multiplier = .5
  }
}
