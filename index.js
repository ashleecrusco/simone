document.addEventListener('DOMContentLoaded', function() {
  intro();
  let introAudio = document.getElementById('introAudio');
  introAudio.play();

  fetch('http://localhost:3000/apps')
    .then(res => res.json())
    .then(json =>
      json.forEach(app => {
        const markup = `
        <li>
          <h3>${app.title}
            <button>edit</button>
          </h3>
        </li>`;

        $('#apps-list').append(markup);
      })
    );

});

function onStart(){
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
  console.log("Get Leaderboard")
}

function onConfig(){
  console.log("Get Configuration")
}

function intro(){

var e = document.querySelector('div.container')
let introduction = document.createElement('div')
introduction.innerHTML = `<button onclick="onStart()">START</button>`
e.appendChild(introduction)
let leader = document.createElement('div')
leader.innerHTML = `<button onclick="onLeader()">LEADERBOARD</button>`
e.appendChild(leader)
let config = document.createElement('div')
config.innerHTML = `<button onclick="onConfig()">CONFIGURE</button>`
e.appendChild(config)
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
