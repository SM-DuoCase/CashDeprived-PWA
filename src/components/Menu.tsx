import '../index.css'
import blackjackImg from '../images/blackjack.webp'
import slotImg from '../images/slots.webp'
import rouletteImg from '../images/roulette.webp'
import pokerImg from '../images/poker.webp'
import MenuCard from './MenuCards'
const Menu = () => {

    let Cards = [];
    let Games = ["Blackjack", "Slotmachine", "Roulette", "Poker"];
    let Images = [blackjackImg, slotImg, rouletteImg, pokerImg];

    for (let index = 0; index < Images.length; index++) {
        Cards.push(
            MenuCard(Images[index], Games[index])
        )
    }

    return (
        <div className='m-2 mt-5 '>
            <div className='w-full h-full grid grid-cols-2 gap-4'>
                {Cards}
            </div>
        </div>
    )
}

export default Menu
