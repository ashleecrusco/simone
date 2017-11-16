let store = {apps: []}
let id = 0
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
      document.getElementById('center').innerHTML = "<h1 class='center'>+10</h1>"
      let el = document.getElementById('scoreboard')
      el.innerHTML = `Score: ${this.score}`
      this.generateAnswer(pattern)
    } else {
      this.gameOver()
    }
  }

  gameOver(){

    if(document.getElementById('leaderboard').innerHTML === "") {
      document.getElementById('title').innerHTML = `<h1 class="large blink">YOU LOSE!</h1><form><input value="" placeholder="Name"></input></form>`
    }


    document.getElementById('title').innerHTML = `
    <h1 class="large blink">YOU LOSE!</h1>
    <form><input type='submit' id="name" value="a" placeholder="Name"></input></form>
    `


    debugger
    let gameOverAudio = document.getElementById('gameOverAudio');
    gameOverAudio.play();


    let table = document.getElementById('board')
    let config = document.getElementById('configChoice').value

    this.config_id = config

    let self = this



    document.getElementById('title').addEventListener('submit', (ev) => {
      let name = document.getElementById('name').value

      self.name = name
      store.apps.push(self)
      this.sendData()
    })

  }

  sendData(){
    let data = this
    fetch('http://localhost:3000/api/v1/apps',
  {
    method: 'POST',
    // mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  })
  .then(res => console.log(res));
    // this.fetchLeaderboard()

  }

  fetchLeaderboard(){
    // fetch('http://localhost:3000/api/v1/apps')
    // .then(res => res.json())
    // .then(json => console.log(json))
    // this.displayLeaderboard()
  }

  displayLeaderboard(){
    //displaying the leaderboard
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
