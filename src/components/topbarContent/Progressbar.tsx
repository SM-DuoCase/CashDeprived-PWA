import { useEffect, useState } from "react";
import "../../index.css"
import { getLostMoney } from "../../money/MoneyManager"

const Progressbar = (percent: number) => {
  

    const [lost, setLostMoney] = useState(getLostMoney())
    if(percent < 15){
        percent = 15
    }

    useEffect(() => {
        document.addEventListener(
            "damn",
            (e) => {
                setLostMoney(getLostMoney())
            },
            false
        );

    }, [])
    return (
        <div className="w-full h-6 bg-gray-200 rounded-full">
            <div className={"h-6 bg-progressGreen rounded-full text-center"} style={{width: percent+"%"}} >
                <p className="mr-2 ml-1">{lost}</p>
            </div>
        </div>
    )
}


export default Progressbar