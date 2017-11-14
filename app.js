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
        active()
       setTimeout(function(){
         change(pattern[i])
       },500);
        setTimeout(function(){
         changeBack(pattern[i])
         i++;
         showPattern(i);
       },1000);
      }
    }
    showPattern(0)

    function change(element){
      document.getElementById(element).className = 'choice selected'
    }

    function changeBack(element){
      document.getElementById(element).className = 'choice'
    }

    function active(){
      document.getElementById('center').setAttribute('class', 'active')
    }




    Promise.resolve().then(this.generateResponse(pattern))

  }


  generateResponse(pattern){
    let int = (3000+(pattern.length * 1700))
    let response = []
    document.getElementById('center').removeAttribute('class', 'active')
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
