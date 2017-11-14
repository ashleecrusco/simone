document.addEventListener('DOMContentLoaded', function() {
  intro();
});

function onStart(){
  const app = new App;
  document.getElementById('intro').innerHTML = ''
  document.getElementById('board').innerHTML = `      <tr>
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
          </tr>`
}

function intro(){
  console.log('hey')
  document.getElementById('intro').innerHTML = `<h1>AHHHHHHHHH<button onclick="onStart()"></button></h1>`
}
