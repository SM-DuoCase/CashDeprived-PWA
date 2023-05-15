import { useEffect, useRef, useState } from 'react'
import { startRound, hit, stand, playerMove, endGame, cardsDealer, cardsPlayer, countHandValue, event } from '../blackjack/BlackjackLogic'
import '../index.css'
import CardMaker from './blackjackContent/CardMaker'
import { getMoney, removeMoney } from '../money/MoneyManager'

const BlackjackScreen = () => {

  function startGame() {
    //check if you can afford...
    if(removeCash()){
      startRound()
      StartGameBtns()
    }    
    
  }

  function hitButton() {
    hit()
  }

  function standButton() {
    stand()
    // console.log(endGame())
  }

  function log() {
    console.log(countHandValue(cardsDealer))
    console.log(countHandValue(cardsPlayer))
  }

  const [countDealer, setCountDealer] = useState(countHandValue(cardsDealer))
  const [countPlayer, setCountPlayer] = useState(countHandValue(cardsPlayer))
  const [_cardsDealer, setCardsDealer] = useState(cardsDealer)
  const [_cardsPlayer, setCardsPlayer] = useState(cardsPlayer)

  // Hit & Stand
  const [isDisabled, setEnableHitStand] = useState(true);
  // Start
  const [isEnabled, setEnableStart] = useState(false);

  let wagerMoney = 0;

  function StartGameBtns() {
    setEnableHitStand(false);
    setEnableStart(true);
  }

  function standClick() {
    setEnableHitStand(true);
    setEnableStart(false)
  }

  useEffect(() => {
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

    document.addEventListener(
      'endGame',
      (e) => {
        setEnableHitStand(true)
        setEnableStart(false)
        endGame(wagerMoney)
      }
    );
  }, [])

  function removeCash():boolean {
    let wagerAmount = document.getElementById("wager") as unknown as HTMLInputElement;
    wagerMoney = wagerAmount.valueAsNumber
    return removeMoney(wagerAmount.valueAsNumber)
  }
  const listCardsDealer = _cardsDealer.map((card) =>
    <CardMaker {...card} />
  )

  const listCardsPlayer = _cardsPlayer.map((card) =>
    <CardMaker {...card} />
  )

  return (
    <div className='w-full h-full'>

      <div className='bg-cardGreen aspect-square rounded-b-full  w-full h-[40vh]'>
        <div className='pt-4'>

          <div className='flex'>
            <div className='justify-end flex w-2/3'>
              {listCardsDealer}
            </div>
            <div className='w-1/3'>
              <p className='text-5xl'>{countDealer}</p>
            </div>
          </div>

          <div className='flex mt-[5vh]'>
            <div className=' flex justify-end w-2/3'>
              {listCardsPlayer}
            </div>
            <div className='w-1/3'>
              <p className='text-5xl'>{countPlayer}</p>
            </div>
          </div>

        </div>
      </div>

      <div className='flex my-4  text-2xl'>
        <div className="flex justify-center space-x-3 w-auto">
          <p className=''>Wager:</p>
          <input type="number" min='0'defaultValue={0} id="wager" className="bg-progressGreen bg-opacity-[45%] border-2 border-progressGreen text-white rounded-lg block w-1/3 text-right pr-3 py-0" placeholder="0" required />
          <button disabled={isEnabled} id='startBtn' className='w-28 mx-0 bg-progressGreen text-2xl py-1 px-6 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' onClick={() => { startGame(); }} >
            Start
          </button>
        </div>
      </div>

      <div className='text-center space-x-3'>
        <button disabled={isDisabled} id='hitBtn' className='w-28 mx-0 bg-progressGreen text-2xl py-1 px-6 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' onClick={() => { hitButton(); }}>
          Hit
        </button>
        <button disabled={isDisabled} id='standBtn' className='w-28 mx-0 bg-progressGreen text-2xl py-1 px-6 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' onClick={() => { standButton(); standClick(); }}>
          Stand
        </button>
      </div>
      {/* <div className='mt-3 text-center'>
        <button className='mx-0 bg-progressGreen text-2xl py-1 px-6 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' onClick={log}>log</button>
      </div> */}

    </div>
  )
}

export default BlackjackScreen
