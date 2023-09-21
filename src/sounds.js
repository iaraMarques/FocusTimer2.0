export default function() {
  const buttonPressAudio = new Audio('./assets/assets_button-press.wav')
  const kitchenTimer = new Audio('./assets/assets_kichen-timer.mp3')
  const forestAudio = new Audio('./assets/Floresta.wav')
  const rainAudio = new Audio('./assets/Chuva.wav')
  const coffeeAudio = new Audio('./assets/Cafeteria.wav')
  const fireplaceAudio = new Audio('./assets/Lareira.wav')

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function resetSounds() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireplaceAudio.pause()
  }


  return {
    pressButton,
    timeEnd,
    resetSounds,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio
  }
}