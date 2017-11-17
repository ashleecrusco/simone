document.addEventListener('DOMContentLoaded', function() {
  // intro();
  esVersion()
  catVersion()
  let introAudio = document.getElementById('introAudio');
  introAudio.play();
});

function restart() {
  location.reload()
}

function onStart(config){
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
