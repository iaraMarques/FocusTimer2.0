import {
  buttonPlay, 
  buttonPause, 
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeSound,
  buttonFireplaceSound,
} from './elements.js'

export default function Events({
  controls,
  timer,
  sound
}) {

  function removeSelection() {
    buttonForestSound.classList.remove('select')
    buttonRainSound.classList.remove('select')
    buttonCoffeeSound.classList.remove('select')
    buttonFireplaceSound.classList.remove('select')
    
  }
  
  function addSelection(card) {
    removeSelection()
    
    card.classList.add('select')
  }

  buttonPlay.addEventListener('click', () => {
    controls.play()  
    timer.countDown()  
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.reset()   
    timer.reset()
    sound.pressButton()
  })
  
  buttonPlus.addEventListener('click', () => {
    let newMinutes = controls.sumMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  
  buttonMinus.addEventListener('click', () => {
    let newMinutes = controls.subtractMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })


  buttonForestSound.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonForestSound.classList.contains('select')) {
      addSelection(buttonForestSound)
      sound.forestAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonRainSound.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonRainSound.classList.contains('select')) {
      addSelection(buttonRainSound)
      sound.rainAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonCoffeeSound.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonCoffeeSound.classList.contains('select')) {
      addSelection(buttonCoffeeSound)
      sound.coffeeAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonFireplaceSound.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonFireplaceSound.classList.contains('select')) {
      addSelection(buttonFireplaceSound)
      sound.fireplaceAudio.play()
      return
    }
    removeSelection()
  })
}