import "../../index.css"

const TopBarProgress = () => {

    return (
        <div className="p-4 pb-8">
            <div className="mb-1 text-2xl font-medium text-center text-white">Loss Progress:</div>

            <div className="w-full h-6 bg-gray-200 rounded-full">
                <div className="h-6 bg-blue-600 rounded-full w-24"></div>
            </div>

            <div className="flex justify-between mb-1 text-lg font-medium">
                <span className="ml-1 text-white">0,-</span>
                <span className="text-white">750,-</span>
            </div>
        </div>
    )
}


export default TopBarProgress