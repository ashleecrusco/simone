class Start{
  constructor(){

    this.changeBackground()
    this.addButtons()
    this.addEventListeners()
  }

  changeBackground(){
    var el =  document.querySelector('table')
    el.style.visibility = "hidden"
    var el1 = document.querySelector('.footer')
    el1.style.visibility = "hidden"
  }

  start(){
    var el =  document.querySelector('table')
    el.style.visibility = "visible"
    var el1 = document.querySelector('footer')
    el1.style.visibility = "visible"
  }

  addButtons(){
    let startButton = document.createElement('button')
    startButton.innerHTML = `click me!
    `
    document.body.appendChild(startButton)
    let leaderButton = document.createElement('button')
    leaderButton.innerHTML = `no, click me!
    `
    document.body.appendChild(leaderButton)
    let configButton = document.createElement('button')
    configButton.innerHTML = `no no no, click me!
    `
    document.body.appendChild(configButton)
  }

  addEventListeners(){
    //leaderboard
    //start (div.table = visible)
  }


}
