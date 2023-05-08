import { Card, CardType } from "./CardModel"

var deck:Card[] = []
export var cardsPlayer: Card[] = []
export var cardsDealer: Card[] = []

export const event = new Event("updateUI");

document.dispatchEvent(event)

function getCardValue(type: number):number {
    if (type < 11) {
        return type
    }
     else  {
        return 10
     }
}


export function countHandValue(cards:Card[]):number {
    let sum = 0;
    let aceCount = 0;
    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].type == 1) {
            aceCount++;
        }
        sum += cards[i].value;
    }
    
    while (aceCount > 0 && sum + 10 <= 21) {
        sum += 10;
        aceCount--;
    }
  
  return sum;
}

function generateDeck(): Card[] {
    var _deck:Card[] = []
    for (let typeIndex = 0; typeIndex < 4; typeIndex++) {
        for (let index = 1; index < 14; index++) {
            const card: Card = {
                symbol: CardType[typeIndex],
                type: index,
                value: getCardValue(index),
                flipped: false
            }
            _deck.push(card)
        }
    }
    console.log(_deck)
    return _deck
}

function giveCard(cards: Card[], amount:number, flipped:boolean): Card[] {
    for (let i = 0; i < amount; i++) {
        let random = Math.floor(Math.random() * deck.length)
        let _card = deck[random];
        deck.splice(random, 1)
        _card.flipped = flipped
        cards.push(_card)
        document.dispatchEvent(event)
        console.log(_card.symbol, _card.type)
    }
    return cards
}

function firstRound() {
    giveCard(cardsDealer, 1, true)

    //giveCard(cardsPlayer, 1, true)
    giveCard(cardsPlayer, 2, true)

}


export function startRound() {
    deck = generateDeck()
    cardsDealer = []
    cardsPlayer = []
    firstRound()
    console.log("start hand:")
    console.log("player: ", countHandValue(cardsPlayer))
    console.log("player: ", cardsPlayer)
    console.log("dealer: ", countHandValue(cardsDealer))
    console.log("dealer: ", cardsDealer)
    //return playerMove(cardsDealer, cardsPlayer)
    
}

function dealerMove() {
    giveCard(cardsDealer, 1, true)
    console.log("dealer: ", countHandValue(cardsDealer))
    while (countHandValue(cardsDealer) < 17)
    {
        giveCard(cardsDealer, 1, true)
        console.log("dealer: ", countHandValue(cardsDealer))
    }
    return
}


export function playerMove():boolean {
    if (countHandValue(cardsPlayer) > 21)
    {
        console.log("Bust!" + countHandValue(cardsPlayer));
        //stand(cardsDealer, cardsPlayer)
        return false
    }
    else if (countHandValue(cardsPlayer) < 21)
    {
        console.log("Current: " + countHandValue(cardsPlayer))
        return true
    }
    else if (countHandValue(cardsPlayer) == 21)
    {
        console.log("Blackjack!" + countHandValue(cardsPlayer));
        //stand(cardsDealer, cardsPlayer)
        return false
    }
    else {
        return false
    }
}

export function hit(): boolean {
    giveCard(cardsPlayer, 1, true)
    return playerMove()
}

export function stand() {
    dealerMove()
}

export function endGame(): string {
    let totalPlayerValue = countHandValue(cardsPlayer)
    let totalDealerValue = countHandValue(cardsDealer)
    let result: string = ""
    if (totalPlayerValue > 21)
    {
        result = "Lose";
    }
    else if(totalPlayerValue <= 21)
    {
        if (totalDealerValue > 21)
        {
            result = "Win";
        }
        else if (totalPlayerValue > totalDealerValue)
        {
            result = "Win";
        }
        else if (totalPlayerValue == totalDealerValue)
        {
            result = "Draw";
        }
        else if (totalPlayerValue < totalDealerValue)
        {
            result = "Lose";
        }
    }
    return result
}