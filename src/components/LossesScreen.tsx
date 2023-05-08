import '../index.css'

const LossesScreen = () => {
    let percent = "25%";

    return (
        <div className='border mb-36'>
            <div className='text-center mb-4'>
                <p className='text-xl'>Total Losses:</p>
                <p className='text-2xl'>250,00</p>
            </div>
            <div className='flex h-screen border'>

                <div className='w-1/3 border text-right'>
                    <p className=''>0,00</p>
                    <p className='mt-[20%]'>0,00</p>
                    <p>0,00</p>
                    <p>0,00</p>
                </div>
                <div className='w-1/3 border flex justify-center'>
                    <div className="h-full w-6 bg-gray-200 rounded-full">
                        <div className="h-6 bg-progressGreen rounded-full" style={{ height: percent }} >

                        </div>
                    </div>
                </div>
                <div className='w-1/3 border'>
                    <p>0,00</p>
                </div>


            </div>
        </div>
    )
}

export default LossesScreen;