import { startRound, hit, stand, playerMove, endGame } from '../blackjack/BlackjackLogic'
import { Card } from '../blackjack/CardModel'
import '../index.css'

function BlackjackScreen() {
  

  function hitButton() {
    if (!hit()) {
      standButton()
    }
  }

  function restartButton() {
    startGame()
  }

  function standButton() {
    stand()
    console.log(endGame())
  }

  function startGame() {
    startRound()
    if (!playerMove()) {
      standButton()
    }
  }

  startGame()
  

  return (
      <div className='w-full h-full'>
        <button className='mx-10' onClick={hitButton}>hit</button>
        <button className='mx-10' onClick={standButton}>stand</button>
        <button className='mx-10' onClick={restartButton}>restart</button>
      </div>
  )
}

export default BlackjackScreen
