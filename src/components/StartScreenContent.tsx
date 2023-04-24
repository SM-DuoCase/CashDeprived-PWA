import '../index.css'
import digid from '../images/digid.webp'

const StartScreenContent = () => {

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
                <a href='/Menu' className='bg-orange-600 flex h-16 w-56 rounded-md'>
                    <div className='w-12 h-12 ml-2 my-2'>
                        <img src={digid}/>
                    </div>
                    <p className='font-sans ml-3 mt-5 font-medium'>Inloggen met DigiD</p>
                </a>
            </div>

        </div>
    )
}

export default StartScreenContent
