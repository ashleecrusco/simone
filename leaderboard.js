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
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
      </tr>
      <tr>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
      </tr>
      <tr>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
        <td class="tg-yw4l">ASH</td>
        <td class="tg-yw4l">100</td>
      </tr>

    </table>
  `
  
}
