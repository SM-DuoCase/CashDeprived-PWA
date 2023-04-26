import "../../index.css"

const Progressbar = (percent: string) => {

    return (
        <div className="w-full h-6 bg-gray-200 rounded-full">
            <div className={"h-6 bg-progressGreen rounded-full text-center"} style={{width: percent}} >
                <p className="mr-2">187,50</p>
            </div>
        </div>
    )
}


export default Progressbar