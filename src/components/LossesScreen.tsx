import '../index.css'

const LossesScreen = () => {
    let percent = "25%";
    percent = "50%";

    function moneyGoals() {
        let percentList = [];
        let amount = 0.00;
        let money = (Math.round(amount * 100) / 100).toFixed(2);
        for (let index = 0; index < 9; index++) {
            if (index === 0) {
                percentList.push(<p className=''>{money}</p>);
            }
            else {
                percentList.push(<p className='mt-[20%]'>{money}</p>);
            }
            amount += 62.50;
            money = (Math.round(amount * 100) / 100).toFixed(2);
        }

        return percentList;
    }

    return (
        <div className=' mb-36'>
            <div className='text-center mb-4'>
                <p className='text-xl'>Total Losses:</p>
                <p className='text-2xl'>250,00</p>
            </div>
            <div className='flex justify-center h-screen '>
                {/* Elke 4 is  */}
                <div className='w-1/3  text-right'>
                    {moneyGoals()}
                    {/* 0% */}
                    {/* <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p> */}
                    {/* 25% */}
                    {/* <p className='mt-[20%]'>250,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p> */}
                    {/* 50% */}
                    {/* <p className='mt-[20%]'>500,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p className='mt-[20%]'>0,00</p> */}
                </div>
                <div className='w-auto mx-2  flex justify-center'>
                    <div className="h-full w-6 bg-gray-200 rounded-full">
                        <div className="h-6 bg-progressGreen rounded-full" style={{ height: percent }} >

                        </div>
                    </div>
                </div>
                <div className='w-1/3 '>
                    {moneyGoals()}
                </div>


            </div>
        </div>
    )
}

export default LossesScreen;