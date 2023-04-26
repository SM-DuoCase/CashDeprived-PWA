import "../../index.css"

const TopBarLosses = () => {

    return (
        <div className="p-8 text-white font-medium">
            <div className="flex justify-center items-center gap-12">
                <div>
                    <div className="mb-1">
                        <span className="text-xl">Current Balance:</span>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl">0,00</span>
                    </div>
                </div>
                <div>
                    <div className="mb-1">
                        <span className="text-xl">Today's Losses:</span>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl">10,00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBarLosses
