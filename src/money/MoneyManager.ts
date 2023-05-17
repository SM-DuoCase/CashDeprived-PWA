import {event} from '../blackjack/BlackjackLogic'

type Player = {
    name: string,
    balance: number,
    totalLost: number,
    lostToday: number,
    blackjack: {
        lostMoney: number,
        lostTimes: number
    },
    roulette: {
        lostMoney: number,
        lostTimes: number
    },
    slotsmachine: {
        lostMoney: number,
        lostTimes: number
    },
    poker: {
        lostMoney: number,
        lostTimes: number
    }
}

let PlayerStats: Player = {
    name: "Niels Feijen",
    balance: 25.00,
    totalLost: 0.00,
    lostToday: 0.00,
    blackjack: {
        lostMoney: 0.00,
        lostTimes: 0
    },
    roulette: {
        lostMoney: 0.00,
        lostTimes: 0
    },
    slotsmachine: {
        lostMoney: 0.00,
        lostTimes: 0
    },
    poker: {
        lostMoney: 0.00,
        lostTimes: 0
    }
}

function getPlayerObject(): Player {
    const _player = localStorage.getItem("PlayerStats")
    if (_player != null) {
        const player: Player = JSON.parse(_player)
        return player
    } else {
        localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats));
        return PlayerStats
    }
}

function savePlayerObject(playerObject: Player) {
    localStorage.setItem("PlayerStats", JSON.stringify(playerObject));
}

export function getMoney(): number {
    const player = getPlayerObject()
    return player.balance
}

export function getLoss(): number {
    const player = getPlayerObject()
    return player.totalLost;
}

export function getBlackJackLoss(): string {
    const player = getPlayerObject()
    return formatter.format(player.blackjack.lostMoney)
}

export function getTimesBlackJackLoss(): number {
    const player = getPlayerObject()
    return player.blackjack.lostTimes
}

export function changeLoss(amount: number){
    const player: Player = getPlayerObject()
    player.lostToday += amount
    player.totalLost += amount
    savePlayerObject(player)
}

export function changeBlackJackLoss(amount: number){
    const player: Player = getPlayerObject()
    player.blackjack.lostMoney += amount
    player.blackjack.lostTimes ++
    savePlayerObject(player)
}


//////////////////////////////////////////

export function addMoney(amount: number) {
    const player: Player = getPlayerObject()
    console.log("added: " + amount)
    player.balance += amount;
    savePlayerObject(player)
    document.dispatchEvent(event)
}

export function removeMoney(amount: number): boolean {
    const player: Player = getPlayerObject()
    if((player.balance - amount) < 0){
        return false
    }
    else{
        player.balance -= amount;
        savePlayerObject(player)
        document.dispatchEvent(event)
        return true
    }

    
}

//////////////////////////////////////////
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
});

export function getBalance(): string {
    const cash = getMoney();
    return formatter.format(cash)
}

export function getLostMoney(): string {
    const cash = getLoss();
    return formatter.format(cash)
}
//////////////////////////////////////////

export function calcPercentPar(goal:number, pastGoal:number) {

    console.log(((getLoss() - pastGoal) / goal) * 100)
    return ((getLoss() - pastGoal) / goal) * 100;
  
}