import { useState } from 'react';
import '../index.css'
import { getLostMoney, calcPercentPar, formatter } from "../money/MoneyManager"

const LossesScreen = () => {

    function moneyGoals() {
        let percentList = [];
        let amount = 0.00;
        for (let index = 0; index < 17; index++) {
            let money = formatter.format(amount)
            if (index === 0) {
                percentList.push(<p className='h-[6.25%]'>{money}</p>);
            }
            else {
                percentList.push(<p className='h-[6.25%] border-dashed border-t-2 border-gray-400'>{money}</p>);
            }
            amount += 62.50;
        }

        return percentList;
    }

    return (
        <div className=' mb-36'>
            <div className='text-center mb-4'>
                <p className='text-xl'>Total Losses:</p>
                <p className='text-2xl'>{getLostMoney()}</p>
            </div>
            <div className='flex justify-center h-screen '>
                {/* Elke 4 is  */}
                <div className='w-1/3 text-right'>
                    {moneyGoals()}
                </div>
                <div className='w-auto mx-2 flex justify-center'>
                    <div className="h-full w-6 bg-gray-200 rounded-full">
                        <div className="bg-progressGreen rounded-full" style={{ height: calcPercentPar(1000.00, 0.00) + .5 + "%" }} >

                        </div>
                        {/* <div className="h-[6.25%] bg-yellow-600 rounded-full" >

                        </div> */}
                    </div>
                </div>
                <div className='w-1/3 '>
                    {/* {moneyGoals()} */}
                </div>


            </div>
        </div>
    )
}

export default LossesScreen;