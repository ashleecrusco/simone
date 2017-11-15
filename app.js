class App {
  constructor(){
  this.addEventListeners()
  this.onStart()
  }

  addEventListeners(){

  }

  onStart() {
    let pattern = []
    this.generateAnswer(pattern)
  }


  generateAnswer(pattern){
    let arr = ['green','red','yellow','blue']
    let index = Math.floor(Math.random() * 4)
    let choice = arr[index]
    pattern.push(choice)
    console.log(pattern)
    function showPattern(i){
      if (i < pattern.length){
       setTimeout(function(){
         change(pattern[i])
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

    showPattern(0)

    function change(element){
      document.getElementById(element).className = 'choice selected'
      document.getElementById('center').setAttribute('class', 'active')
    }

    function changeBack(element){
      document.getElementById(element).className = 'choice'
    }

    Promise.resolve().then(this.generateResponse(pattern))

  }


  generateResponse(pattern){
    let int = (3000+(pattern.length * 1700))
    let response = []
    let string = ''
    document.addEventListener('keydown', (ev) => {
      if (response.length < pattern.length){
        let color = checkColor(ev.key)
        response.push(ev.key)
        string += `<span class='circle' style='color: ${color};'></span>`
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
      this.generateAnswer(pattern)
    } else {
      this.gameOver()
    }
  }

  gameOver(){
    document.getElementById('header').innerHTML = `<h1 class="large">YOU LOSE!</h1>`
    console.log("you lose!!!")
  }

}
