import { addMoney, changeBlackJackLoss, changeLoss } from "../money/MoneyManager";
import { Card, CardType } from "./CardModel"

var deck: Card[] = []
export var cardsPlayer: Card[] = []
export var cardsDealer: Card[] = []

export const event = new Event("updateUI");
export const cashCheck = new Event("cashCheck");
export const gamestatus = new Event("endGame");

document.dispatchEvent(event)

function getCardValue(type: number): number {
    if (type < 11) {
        return type
    }
    else {
        return 10
    }
}


export function countHandValue(cards: Card[]): number {
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
    var _deck: Card[] = []
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

function giveCard(cards: Card[], amount: number, flipped: boolean): Card[] {

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
    checkBlackjack(false)
    //return playerMove(cardsDealer, cardsPlayer)
}

function dealerMove() {

    giveCard(cardsDealer, 1, true)
    console.log("dealer: ", countHandValue(cardsDealer))
    while (countHandValue(cardsDealer) < 17) {
        giveCard(cardsDealer, 1, true)
        console.log("dealer: ", countHandValue(cardsDealer))
    }
    document.dispatchEvent(gamestatus);

    return
}

export function checkBlackjack(hit: boolean) {
    if (countHandValue(cardsPlayer) == 21) {
        console.log("je hebt 21")
        if (cardsPlayer.length === 2 && countHandValue(cardsDealer) >= 10 && !hit) {
            giveCard(cardsDealer, 1, true)
            document.dispatchEvent(gamestatus);
            return;
        }
        else if (cardsPlayer.length > 2) {
            if (hit) {
                dealerMove()
            }
            return;
        }
        else {
            console.log("Blackjack! " + countHandValue(cardsPlayer));
            document.dispatchEvent(gamestatus);
            return;
        }
    }
}

export function playerMove() {
    if (countHandValue(cardsPlayer) > 21) {
        console.log("Bust!" + countHandValue(cardsPlayer));
        document.dispatchEvent(gamestatus);
        return;
    }
    else if (countHandValue(cardsPlayer) < 21) {
        giveCard(cardsPlayer, 1, true)
        console.log("Current: " + countHandValue(cardsPlayer))
        if (countHandValue(cardsPlayer) > 21) {
            document.dispatchEvent(gamestatus);
            return;
        }
        checkBlackjack(true)
        return;
    }
    else {
        checkBlackjack(true)
    }
    return;
}

export function hit() {
    playerMove()
    return
}

export function stand() {
    dealerMove()
}

export function endGame(wager: number): string {
    let totalPlayerValue = countHandValue(cardsPlayer)
    let totalDealerValue = countHandValue(cardsDealer)
    let result: string = ""

    if (totalPlayerValue > 21) {
        result = "Lose";
        changeLoss(wager)
        changeBlackJackLoss(wager)

    }
    else if (totalPlayerValue <= 21) {
        if (totalDealerValue > 21) {
            result = "Win";
            addMoney(wager * 2)
        }
        else if (totalPlayerValue > totalDealerValue) {
            if (totalPlayerValue == 21 && cardsPlayer.length > 2) {
                addMoney(wager + wager * 0.5)
                result = "Win";
            }
            else {
                result = "Win";
                addMoney(wager * 2)
            }
        }
        else if (totalPlayerValue == totalDealerValue) {
            result = "Draw";
            addMoney(wager)
        }
        else if (totalPlayerValue < totalDealerValue) {
            result = "Lose";
            changeLoss(wager)
            changeBlackJackLoss(wager)
        }
    }
    document.dispatchEvent(cashCheck);
    console.log(result)
    return result
}