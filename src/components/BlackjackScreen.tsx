import { useEffect, useRef, useState } from 'react'
import { startRound, hit, stand, playerMove, endGame, cardsDealer, cardsPlayer, countHandValue, event } from '../blackjack/BlackjackLogic'
import { Card } from '../blackjack/CardModel'
import '../index.css'

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

function log() {
  console.log(countHandValue(cardsDealer))
  console.log(countHandValue(cardsPlayer))
}

startGame()

function BlackjackScreen() {
  const [countDealer, setCountDealer] = useState(countHandValue(cardsDealer))
  const [countPlayer, setCountPlayer] = useState(countHandValue(cardsPlayer))
  const [_cardsDealer, setCardsDealer] = useState(cardsDealer)
  const [_cardsPlayer, setCardsPlayer] = useState(cardsPlayer)


  useEffect(()=> {
    document.addEventListener(
      "updateUI",
      (e) => {
        setCountDealer(countHandValue(cardsDealer))
        setCountPlayer(countHandValue(cardsPlayer))
        setCardsDealer(cardsDealer)
        setCardsPlayer(cardsPlayer)
      },
      false
    );
  }, [])
  
  const listCardsDealer = _cardsDealer.map((card) => 
    <li>{card.type}</li>
  )

  const listCardsPlayer = _cardsPlayer.map((card) => 
    <li>{card.type}</li>
  )
  

  return (
      <div className='w-full h-full'>
        <button className='mx-10' onClick={hitButton}>hit</button>
        <button className='mx-10' onClick={standButton}>stand</button>
        <button className='mx-10' onClick={restartButton}>restart</button>
        <button className='mx-10' onClick={log}>log</button>
        <p>Dealer: {countDealer}</p>
        {listCardsDealer}
        <p>Player: {countPlayer}</p>
        {listCardsPlayer}
      </div>
  )
}

export default BlackjackScreen
