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

  var e = document.body
  let intro = document.createElement('div')
  intro.innerHTML = `<button onclick="onStart()">START</button>`
  e.appendChild(intro)
  let leader = document.createElement('div')
  leader.innerHTML = `<button onclick="onLeader()">LEADERBOARD</button>`
  e.appendChild(leader)
  let config = document.createElement('div')
  config.innerHTML = `<button onclick="onConfig()">CONFIGURE</button>`
  e.appendChild(config)

}
