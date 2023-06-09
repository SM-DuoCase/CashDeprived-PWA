import { useEffect } from 'react';
import '../index.css'
import { useLocation } from 'react-router-dom';

const Bottombar = () => {
  // for later use, to disable buttons
  let show = false;
  let disableLosses = false;
  let disableHome = false;

  const location = useLocation();

  if (location.pathname == "/") {
    show = true
  }

  if (location.pathname.toLowerCase() == "/losses") {
    disableLosses = true;
  }
  else if (location.pathname.toLowerCase() == "/menu") {
    disableHome = true;
  }



  return (
    <div className='' hidden={show}>
      <div id='bottombar' className="fixed bottom-0 left-0 z-50 w-full h-28 justify-center">
        <div className="flex justify-center items-center h-full gap-4">
          <a href='/#/menu'>
            <button className='bg-progressGreen text-2xl py-2 px-8 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' disabled={disableHome}>Home</button>
          </a>
          <a href='/#/losses'>
            <button className='bg-progressGreen text-2xl py-2 px-8 shadow-btn rounded-md active:translate-y-1 active:shadow-btnClick active:bg-opacity-50 disabled:bg-opacity-50 disabled:text-gray-300' disabled={disableLosses}>Losses</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bottombar
