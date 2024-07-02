import './App.css'
//import DesktopSidebar from './assets/images/bg-sidebar-desktop.jpg'
import { StepsImage } from './assets/components/steps.jsx'

function App() {
  return (
    <div className='grid grid-cols-[1fr_3fr] bg-white w-3/5 h-4/6 rounded-xl p-3'>
      <div className={`bg-center bg-[url('./assets/images/bg-sidebar-desktop.svg')] h-full w-full rounded-xl py-10 px-5 `}>
        <StepsImage step={'1'} text={'YOUR INFO'} />
        <StepsImage step={'2'} text={'SELECT PLAN'} />
        <StepsImage step={'3'} text={'ADD-ONS'} />
        <StepsImage step={'4'} text={'SUMMARY'} />
      </div>
      <div className="menu text-justify px-20 pt-8 h-full">
        <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Personal info</h1>
        <span className='text-gray-400 font-ubuntu'>Please provide your name, email address and phone number</span>
        <div className='form h-auto mt-4'>
          <form action="">
            <div className='flex flex-col'>
              <label htmlFor="name" className='font-ubuntu mb-2 text-Marine-blue'>Name</label>
              <input type="text" className='border hover:border-Purplish-blue active:border-Purplish-blue focus:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='font-ubuntu mb-2 text-Marine-blue'>Email</label>
              <input type="email" className='peer border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue invalid:border-Strawberry-red invalid:focus:border-Strawberry-red invalid:hover:border-Strawberry-red' />
              <p className="invisible peer-invalid:visible text-Strawberry-red text-sm font-ubuntu">
                Please provide a valid email address.
              </p>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor="phone" className='font-ubuntu mb-2 text-Marine-blue'>Phone</label>
              <input required type="tel" className='border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue' />
            </div>
          </form>
          <div className="flex justify-end">
            <button className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal'>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
