import "../../index.css"
import { getLostMoney } from "../../money/MoneyManager"

const Progressbar = (percent: number) => {

    return (
        <div className="w-full h-6 bg-gray-200 rounded-full">
            <div className={"h-6 bg-progressGreen rounded-full text-center"} style={{width: percent+"%"}} >
                <p className="mr-2">{getLostMoney()}</p>
            </div>
        </div>
    )
}


export default Progressbar