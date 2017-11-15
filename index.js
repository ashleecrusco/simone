document.addEventListener('DOMContentLoaded', function() {
  intro();
});

function onStart(){
  document.getElementById('intro').innerHTML = ''
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

function intro(){
  document.getElementById('intro').innerHTML += `<h1>AHHHHHHHHH<button onclick="onStart()"></button></h1>`
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
