import { useEffect, useState } from "react";
import { getTimesBlackJackLoss } from "../money/MoneyManager";

type MessageCardProps = {
    shower: boolean;
    type: string;
};

const MessageCard = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.addEventListener(
            'lostGame',
            (e) => {
                checkStreak()
            }
        );
    }, [])

    let text;
    if (getTimesBlackJackLoss() % 5 === 0 && getTimesBlackJackLoss() != 0) {
        text = "You just lost for the " + getTimesBlackJackLoss() + "th time."
    }



    function checkStreak() {
        if (getTimesBlackJackLoss() % 5 === 0 && getTimesBlackJackLoss() != 0) {
            setShow(true);
        }
    }

    function del() {
        setShow(false);
    }

    return (
        <>
            {show &&
                <div className='flex items-center w-full h-1/3 absolute' >
                    <div className='flex justify-center w-full'>
                        <div id="toast-default" className="w-3/4 p-4 rounded-lg text-gray-400 bg-gray-800" role="alert">
                            <div className="">
                                <p className='text-2xl mr-2 font-medium'>
                                    {/* Damn you just lost ALOT of money! */}
                                    You lost again....
                                </p>
                                <p className='text-lg mt-1 '>
                                    {text}
                                </p>
                            </div>
                            <button className='bg-gray-400 text-white px-2 py-1 rounded-md text-lg mt-2' onClick={() => { del(); }}>
                                Continue....
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MessageCard