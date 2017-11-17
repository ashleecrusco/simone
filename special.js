let special = "reg";
let specialClass = "active"

function esVersion() {
  document.addEventListener('keydown', function (e) {
    if (e.key === "e"){
      special = "es"
      specialClass = "es"
      esAudio()
      document.getElementById('esIntro').innerHTML += `<source src="audio/es-dom.wav" type="audio/mpeg"></source>`
      document.getElementById('esIntro').play()
    }
  })
}

function catVersion() {
  document.addEventListener('keydown', function (e) {
    if (e.key === "c"){
      special = "cat"
      specialClass = "cat"
      catAudio()
      document.getElementById('catIntro').innerHTML += `<source src="audio/cat-2.wav" type="audio/mpeg"></source>`
      document.getElementById('catIntro').play()
    }
  })
}

function catAudio(){
  document.getElementById('audio').innerHTML = `<audio id="catIntro"><audio id="redAudio">
    <source src="audio/cat-1.wav" type="audio/wav"></source>

    <audio id="blueAudio">
    <source src="audio/cat-2.wav" type="audio/wav"></source>

    <audio id="yellowAudio">
    <source src="audio/cat-3.wav" type="audio/wav"></source>

    <audio id="greenAudio">
    <source src="audio/cat-4.wav" type="audio/wav"></source>

    <audio id="gameOverAudio">
    <source src="audio/cat-intro.wav" type="audio/mpeg"></source>
  `
}

function esAudio(){
  document.getElementById('audio').innerHTML = `<audio id="esIntro"><audio id="redAudio">
    <source src="audio/es-bro.wav" type="audio/wav"></source>

    <audio id="blueAudio">
    <source src="audio/es-bru.wav" type="audio/wav"></source>

    <audio id="yellowAudio">
    <source src="audio/es-bra.wav" type="audio/wav"></source>

    <audio id="greenAudio">
    <source src="audio/nick-bro.wav" type="audio/wav"></source>

    <audio id="gameOverAudio">
    <source src="audio/es-gameover.wav" type="audio/mpeg"></source>
  `
}
