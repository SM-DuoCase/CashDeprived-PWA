import { Card } from "../../blackjack/CardModel"
import "../../index.css"

const CardMaker = (data: Card) => {

    let symbol = "?";
    let numberSize;
    let cardTypeDisplay = data.type.toString();
    switch (data.symbol) {
        case "Spades":
            symbol = "fa-solid fa-triangle-exclamation";
            break;
        case "Hearts":
            symbol = "fa-solid fa-heart text-red-600";
            break;
        case "Clovers":
            symbol = "fa-solid fa-clover text-black";
            break;
        case "Diamonds":
            symbol = "fa-solid fa-diamond text-red-600";
            break;
        default:
            // handle any other cases not covered above
            break;
    }

    switch (cardTypeDisplay) {
        case '1':
            cardTypeDisplay = "A";
          break;
        case '11':
          cardTypeDisplay = "J";
          break;
        case '12':
          cardTypeDisplay = "Q";
          break;
        case '13':
          cardTypeDisplay = "K";
          break;
        default:
          // do nothing if data.type is not 1, 11, 12, or 13
          break;
      }

    switch (true) {
        case (data.value > 9):
            symbol += " px-0.5";
            break;
        default:
            numberSize = "px-0.5";
            break;
    }
    
    return (
        //Top
        <div className='bg-white flex flex-col leading-[1] justify-between rounded-md text-lg text-black w-20 h-28 mr-2'>
            <div className="text-left p-1">
                <p className={numberSize}>{cardTypeDisplay}</p>
                <i className={symbol + " fa-xs"}></i>
            </div>

            <i className={symbol + " text-center"}></i>

            <div className="text-right px-1 ">
                <p className={numberSize}>{cardTypeDisplay}</p>
                <i className={symbol + " fa-xs"}></i>

            </div>
        </div>
        
    )
}

export default CardMaker
