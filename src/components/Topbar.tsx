import '../index.css'
import TopBarTitle from './topbarContent/TopBarTitle'
import TopBarProgress from './topbarContent/TopBarProgress';
import TopBarLosses from './topbarContent/TopBarLosses';

const Topbar = () => {

  let TopbarContent;
  const loc = window.location.pathname.toLocaleLowerCase();
  if (loc == "/menu" || loc == "/blackjack") {
    TopbarContent = TopBarProgress()
  }
  else if(loc == "/losses"){
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
