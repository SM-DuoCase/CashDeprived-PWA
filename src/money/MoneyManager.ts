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

export function addMoney(amount: number) {
    const player: Player = getPlayerObject()
    player.balance += amount;
    savePlayerObject(player)
}

export function removeMoney(amount: number) {
    const player: Player = getPlayerObject()
    player.balance -= amount;
    savePlayerObject(player)
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