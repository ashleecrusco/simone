document.addEventListener('DOMContentLoaded', function() {
  intro();
});

function onStart(){
  document.getElementById('intro').innerHTML = ''
  let table = document.createElement('table')
  table.id = 'board'
  let body = document.body
  body.appendChild(table)
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

function onLeader(){
  console.log('Need to get data')
}

function onConfig(){
  console.log('Need to get config options')
}

function menu(){
  var board = document.getElementById('board')
  board.remove()
  // intro()
}

function intro(){
  document.getElementById('intro').innerHTML += `<h1>AHHHHHHHHH<button onclick="onStart()"></button></h1>`
}

function checkColor(ev){
  if(ev === 'ArrowLeft'){
    return 'red'
  }
  if(ev === 'ArrowDown'){
    return 'blue'
  }
  if(ev === 'ArrowRight'){
    return 'yellow'
  }
  if(ev === 'ArrowUp'){
    return 'green'
  }
}
