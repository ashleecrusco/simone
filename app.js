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

    function log(i){
      console.log(pattern[i]);
      change(pattern[i])
      if (i < pattern.length){
         setTimeout(function(){
           changeBack(pattern[i])
           i++;
           log(i);
      },5000);
     }
    }

    log(0)

    // pattern.forEach(function(element){
    //   Promise(change)
    //   setTimeout(change, i * 1000)
    //   setTimeout(changeBack, i* 2000)
    //   i++
      function change(element){
        document.getElementById(element).className = 'choice selected'
      }

      function changeBack(element){
        document.getElementById(element).className = 'choice'
      }
    // })

    this.generateResponse(pattern)
  }


  generateResponse(pattern){
    let int = (3000+(pattern.length * 1000))
    let response = []

    document.addEventListener('keydown', (ev) => {
      if (response.length < pattern.length){
        response.push(ev.key)
    }})

  let self = this
  setTimeout(function(){ self.checkResponse(pattern,response); }, int);
  }


  checkResponse(pattern, response) {
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

    // let self = this
    if (decodedPattern.join() === response.join()){
      this.generateAnswer(pattern)
    } else {
      this.gameOver()
    }

// console.log("this is the pattern",pattern)
// console.log("this is the response",response)
// console.log("this is the decoded pattern",decodedPattern)

  }

  gameOver(){
    console.log("you lose!!!")
  }

}
