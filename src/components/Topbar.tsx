import '../index.css'
import TopBarTitle from './topbarContent/TopBarTitle'
import TopBarProgress from './topbarContent/TopBarProgress';
import TopBarLosses from './topbarContent/TopBarLosses';
import { useLocation } from 'react-router-dom';

const Topbar = () => {

  let TopbarContent;
  // const loc = window.location.hash.toLocaleLowerCase();
  const loc = useLocation();
  if (loc.pathname.toLowerCase() == "/menu" || loc.pathname.toLowerCase()  == "/blackjack") {
    TopbarContent = TopBarProgress()
  }
  else if(loc.pathname.toLowerCase()  == "/losses"){
    TopbarContent = TopBarLosses();
  }
  else {
    TopbarContent = TopBarTitle()
  }

  return (
    <div id='topbar' className='w-full'>
        {TopbarContent}
    </div>
  )
}

export default Topbar
