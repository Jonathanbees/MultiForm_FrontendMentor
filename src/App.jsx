import './App.css'
import DesktopSidebar from './assets/images/bg-sidebar-desktop.jpg'
import { Steps } from './assets/components/steps.jsx'

function App() {
  return (
    
    <div className='grid grid-cols-[1fr_3fr] place-items-center bg-slate-400 w-2/3 h-4/6 rounded-xl p-3'>
      {/* Asegúrate de que este div tenga una altura definida */}
      <div className={`bg-center bg-[url('./assets/images/bg-sidebar-desktop.svg')] h-full w-full rounded-xl py-10 px-6 `}>
        <Steps step={'1'} text={'YOUR INFO'} />
        <Steps step={'2'} text={'SELECT PLAN'} />
        <Steps step={'3'} text={'ADD-ONS'} />
        <Steps step={'4'} text={'SUMMARY'} />
      </div>
      <div className="menu bg-slate-500">
        <h1>hola</h1>
      </div>
    </div>
  )
}

export default App
