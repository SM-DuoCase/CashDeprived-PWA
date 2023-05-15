import '../index.css'
import digid from '../images/digid.webp'

const StartScreenContent = () => {
    //possible function, so we dont have to call it like this every time
    const PlayerStats = {
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

    if (window.localStorage.getItem("PlayerStats") == null) {
        window.localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats));
    }

    return (
        <div className=''>
            <div className='mx-10  my-5'>
                <div className='text-center text-lg'>
                    <p className=''>
                        If you want to use Cash Deprived,
                        Follow the steps your doctor explained to you.
                        By logging in with your DigiD you will be granted access to the app.
                        If for any reason you do not get access to the app after logging in,
                        contact the doctor who you agreed upon the use of this app with.
                    </p>
                </div>
            </div>
            <div className='flex mt-16 justify-center'>
                <a href='/#/menu' className='bg-orange-600 flex h-16 w-56 rounded-md'>
                    <div className='w-12 h-12 ml-2 my-2'>
                        <img src={digid} />
                    </div>
                    <p className='font-sans ml-3 mt-5 font-medium'>Inloggen met DigiD</p>
                </a>
            </div>

        </div>
    )
}

export default StartScreenContent
