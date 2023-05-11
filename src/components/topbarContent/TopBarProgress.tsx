
import "../../index.css"
import { getBalance, calcPercentPar, getLoss, formatter } from "../../money/MoneyManager"
import Progressbar from "./Progressbar"

const TopBarProgress = () => {
    //calculate percent basded on loss
    //also send loss? or get it in the component itself?



    let goalStart: number = 0;
    let goalMax: number = 0;

    let Moneygoals: Array<number> = [];
    const increment = 62.50;
    let goal = 0.00;
    for (let index = 0; index < 9; index++) {
        Moneygoals.push(goal)
        goal += increment;
    }
    console.log(Moneygoals)

    for (let index = 0; index < Moneygoals.length; index++) {
        if (Moneygoals[index] > getLoss()) {
            goalStart = Moneygoals[index - 1]
            goalMax = Moneygoals[index]
            break;
        }

    }
    let ProggressBar = Progressbar(calcPercentPar(goalMax, goalStart));



    return (
        <div className="p-4 pb-4">
            <div className="mb-1 text-2xl font-medium text-center text-white">Loss Progress:</div>
            {ProggressBar}
            <div className="flex justify-between mb-1 text-lg font-medium">
                <span className="ml-1 text-white">{formatter.format(goalStart)}</span>
                <span className="text-white">{formatter.format(goalMax)}</span>
            </div>
            <div className="flex justify-center mb-1 text-xl font-medium">
                <span className="ml-1 text-white">Current Balance:</span>
            </div>
            {/* Slightly bigger looks better */}
            <div className="flex justify-center text-2xl font-medium">
                <span className="ml-1 text-white">{getBalance()}</span>
            </div>
        </div>
    )
}


export default TopBarProgress

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.")
}


function setCountDealer(arg0: any) {
    throw new Error("Function not implemented.")
}


function countHandValue(cardsDealer: any): any {
    throw new Error("Function not implemented.")
}


function setCountPlayer(arg0: any) {
    throw new Error("Function not implemented.")
}


function setCardsDealer(cardsDealer: any) {
    throw new Error("Function not implemented.")
}


function setCardsPlayer(cardsPlayer: any) {
    throw new Error("Function not implemented.")
}


function setEnableHitStand(arg0: boolean) {
    throw new Error("Function not implemented.")
}


function setEnableStart(arg0: boolean) {
    throw new Error("Function not implemented.")
}
