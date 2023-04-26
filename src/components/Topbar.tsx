import '../index.css'
import StartScreen from './StartScreen'

function Topbar() {

  return (
    <div id='topbar' className='h-48'>
      {/* Container for different headers*/}
      <div>
        {/* if the first time login show this */}
        <StartScreen />
      </div>
    </div>
  )
}

export default Topbar
