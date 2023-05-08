export let money: number =  getMoney()

function getMoney():number {
    const _money = localStorage.getItem("money")
    if (_money != null) {
        return parseInt(_money)
    } else {
        localStorage.setItem("money", "0")
        return 0
    }
}


export function addMoney(amount:number) {
    money += amount;
    localStorage.setItem("money", money.toString())
}

export function removeMoney(amount:number) {
    money -= amount;
    localStorage.setItem("money", money.toString())
}