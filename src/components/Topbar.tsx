import '../index.css'
import TopBarTitle from './topbarContent/TopBarTitle'
import TopBarProgress from './topbarContent/TopBarProgress';

const Topbar = () => {

  let TopbarContent;
  if (window.location.pathname.toLocaleLowerCase() == "/Menu".toLocaleLowerCase()) {
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
