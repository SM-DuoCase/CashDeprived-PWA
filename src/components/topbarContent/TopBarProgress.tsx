import "../../index.css"
import Progressbar from "./Progressbar"

const TopBarProgress = () => {
    //calculate percent basded on loss
    //also send loss? or get it in the component itself?
    const percent = "25%"
    let ProggressBar = Progressbar(percent);

    return (
        <div className="p-4 pb-4">
            <div className="mb-1 text-2xl font-medium text-center text-white">Loss Progress:</div>
            {ProggressBar}
            <div className="flex justify-between mb-1 text-lg font-medium">
                <span className="ml-1 text-white">0,-</span>
                <span className="text-white">750,-</span>
            </div>
            <div className="flex justify-center mb-1 text-xl font-medium">
                <span className="ml-1 text-white">Current Balance:</span>
            </div>
            {/* Slightly bigger looks better */}
            <div className="flex justify-center text-2xl font-medium">
                <span className="ml-1 text-white">0,00</span>
            </div>
        </div>
    )
}


export default TopBarProgress