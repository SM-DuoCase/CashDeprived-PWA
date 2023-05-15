import '../index.css'

const MenuCard = (imageSource: string, CardName: string) => {

    return (
        <div className="rounded-lg shadow border-2 border-cardGreen bg-cardGreen">
            <a href={"/#/"+CardName}>
                <img className="rounded-t-lg" src={imageSource} alt="" />
            </a>
            <div className="flex items-center justify-center">
                <a href={"/#/"+CardName}>
                    <h5 className="hover:underline text-2xl font-medium text-center m-1 text-white">{CardName}</h5>
                </a>
            </div>
        </div>
    )
}

export default MenuCard
