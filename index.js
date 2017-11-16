document.addEventListener('DOMContentLoaded', function() {
  // intro();
  let introAudio = document.getElementById('introAudio');
  introAudio.play();
});

function restart() {
  location.reload()
}

function onStart(){
  document.getElementById('title').innerHTML = `<h1 class="large">SIMONE</h1>`
  if(document.getElementById('leaderboard')) {
    document.getElementById('leaderboard').innerHTML = ``
  }
  if(document.getElementById('scoreboard')){
    document.getElementById('start').removeAttribute('onclick')
    document.getElementById('start').setAttribute('id', 'restart')
    document.getElementById('restart').setAttribute('onclick', restart())
}
  document.getElementById('board').innerHTML = `

      <tr>
        <td id="empty"></td>
        <td id="green" class="choice"></td>
        <td id="empty"></td>
          </tr>
        <tr>
        <td id="red" class="choice"></td>
        <td id="center"></td>
        <td id="yellow" class="choice"></td>
          </tr>
        <tr>
        <td id="empty"></td>
        <td id="blue" class="choice"></td>
        <td id="empty"></td>
      </tr>
      `


      const app = new App;
}



function onConfig(){
  console.log("Get Configuration")
}

// function intro(){
//   var e = document.querySelector('div.container')
//   let introduction = document.createElement('div')
//   introduction.innerHTML = `<button onclick="onStart()" id="start">START</button>`
//   e.appendChild(introduction)
//   let leader = document.createElement('div')
//   leader.innerHTML = `<button onclick="onLeader()">LEADERBOARD</button>`
//   e.appendChild(leader)
//   let config = document.createElement('div')
//   config.innerHTML = `<button onclick="onConfig()">CONFIGURE</button>`
//   e.appendChild(config)
// }

function checkColor(ev){
  if(ev === 'ArrowLeft'){
    return 'red'
  }
  else if(ev === 'ArrowDown'){
    return 'blue'
  }
  else if(ev === 'ArrowRight'){
    return 'yellow'
  }
  else if(ev === 'ArrowUp'){
    return 'green'
  }
  else {
    return 'x'
  }

}
