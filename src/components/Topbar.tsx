import '../index.css'
import TopBarContentStart from './topbarContent/TopBarContentStart'
import TopBarProgress from './topbarContent/TopBarProgress';

const Topbar = () => {

  let data;
if(window.location.pathname == "/Menu".toLocaleLowerCase()){
  data = TopBarProgress()
}
else{
  data = TopBarContentStart()
}


  return (
    <div id='topbar' className='w-full'>
      {/* Container for different headers*/}
      <div>
      {data}

      </div>
    </div>
  )
}

export default Topbar
