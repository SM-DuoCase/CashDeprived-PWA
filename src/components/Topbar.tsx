import '../index.css'
import TopBarTitle from './topbarContent/TopBarTitle'
import TopBarProgress from './topbarContent/TopBarProgress';
import TopBarLosses from './topbarContent/TopBarLosses';

const Topbar = () => {

  let TopbarContent;
  if (window.location.pathname.toLocaleLowerCase() == "/menu") {
    TopbarContent = TopBarProgress()
  }
  else if(window.location.pathname.toLocaleLowerCase() == "/losses"){
    TopbarContent = TopBarLosses();
  }
  else if(window.location.pathname.toLocaleLowerCase() == "/blackjack"){
    TopbarContent = TopBarProgress()
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
