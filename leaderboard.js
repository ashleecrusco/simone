function onLeader(){
  // clear page
  if(document.getElementById('board')){
    document.getElementById('board').innerHTML = ``
  }
  if(document.querySelector('.instruction')){
    document.querySelector('.instruction').removeAttribute('class', 'instruction')
  }
  if (document.getElementById('scoreboard')){
    document.getElementById('scoreboard').innerHTML = ``
  }
  if(document.getElementById('title')){
    document.getElementById('title').innerHTML = ``
  }
  fetchAllBoards()

  // add leaderboard table
  document.getElementById('leaderboard').innerHTML = `

    <table class="tg">
      <tr>
        <th class="tg-baqh" colspan="2">Easy</th>
        <th class="tg-baqh" colspan="2">Medium</th>
        <th class="tg-baqh" colspan="2">Hard</th>
      </tr>
      <tr>
        <td class="tg-qgsu">Player</td>
        <td class="tg-qgsu">Score</td>
        <td class="tg-qgsu">Player</td>
        <td class="tg-qgsu">Score</td>
        <td class="tg-qgsu">Player</td>
        <td class="tg-qgsu">Score</td>
      </tr>
      <tr>

        <td id="e-1-name" class="tg-yw4l">ASH</td>
        <td id="e-1-score" class="tg-yw4l">100</td>

        <td id="m-1-name" class="tg-yw4l">ASH</td>
        <td id="m-1-score"class="tg-yw4l">100</td>

        <td id="h-1-name" class="tg-yw4l">ASH</td>
        <td id="h-1-score" class="tg-yw4l">100</td>

      </tr>
      <tr>
      <td id="e-2-name" class="tg-yw4l">ASH</td>
      <td id="e-2-score" class="tg-yw4l">200</td>

      <td id="m-2-name" class="tg-yw4l">ASH</td>
      <td id="m-2-score"class="tg-yw4l">200</td>

      <td id="h-2-name" class="tg-yw4l">ASH</td>
      <td id="h-2-score" class="tg-yw4l">100</td>
      </tr>
      <tr>
      <td id="e-3-name" class="tg-yw4l">ASH</td>
      <td id="e-3-score" class="tg-yw4l">300</td>

      <td id="m-3-name" class="tg-yw4l">ASH</td>
      <td id="m-3-score"class="tg-yw4l">300</td>

      <td id="h-3-name" class="tg-yw4l">ASH</td>
      <td id="h-3-score" class="tg-yw4l">300</td>
      </tr>

    </table>
  `

}

function fetchAllBoards() {
  fetch(`https://simone-api.herokuapp.com/api/v1/configs/1/apps`).then(res => res.json()).then(json => renderEasy(json));
  fetch(`https://simone-api.herokuapp.com/api/v1/configs/2/apps`).then(res => res.json()).then(json => renderMed(json));
  fetch(`https://simone-api.herokuapp.com/api/v1/configs/3/apps`).then(res => res.json()).then(json => renderHard(json));
}

function renderEasy(data) {
  let sorted = data.sort(function(a, b){return b.score-a.score})
  document.getElementById('e-1-name').innerHTML = `${data[0].name}`
  document.getElementById('e-1-score').innerHTML = `${data[0].score}`
  document.getElementById('e-2-name').innerHTML = `${data[1].name}`
  document.getElementById('e-2-score').innerHTML = `${data[1].score}`
  document.getElementById('e-3-name').innerHTML = `${data[2].name}`
  document.getElementById('e-3-score').innerHTML = `${data[2].score}`
}

function renderMed(data) {
  let sorted = data.sort(function(a, b){return b.score-a.score})
  document.getElementById('m-1-name').innerHTML = `${data[0].name}`
  document.getElementById('m-1-score').innerHTML = `${data[0].score}`
  document.getElementById('m-2-name').innerHTML = `${data[1].name}`
  document.getElementById('m-2-score').innerHTML = `${data[1].score}`
  document.getElementById('m-3-name').innerHTML = `${data[2].name}`
  document.getElementById('m-3-score').innerHTML = `${data[2].score}`
}

function renderHard(data) {
  let sorted = data.sort(function(a, b){return b.score-a.score})
  document.getElementById('h-1-name').innerHTML = `${data[0].name}`
  document.getElementById('h-1-score').innerHTML = `${data[0].score}`
  document.getElementById('h-2-name').innerHTML = `${data[1].name}`
  document.getElementById('h-2-score').innerHTML = `${data[1].score}`
  document.getElementById('h-3-name').innerHTML = `${data[2].name}`
  document.getElementById('h-3-score').innerHTML = `${data[2].score}`
}
