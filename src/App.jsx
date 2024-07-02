import './App.css'
import { useState } from 'react';
//import DesktopSidebar from './assets/images/bg-sidebar-desktop.jpg'
import { StepsImage } from './assets/components/steps.jsx'
import { MultiStepForm } from './assets/components/multiStep.jsx'

function App() {
  const [currentStep, setCurrentStep] = useState(1); 
  return (
    <div className='grid grid-cols-[1fr_3fr] bg-white w-3/5 h-4/6 rounded-xl p-3'>
      <div className={`bg-center bg-[url('./assets/images/bg-sidebar-desktop.svg')] h-full w-full rounded-xl py-10 px-5 `}>
        <StepsImage step={'1'} text={'YOUR INFO'} currentStep={currentStep} />
        <StepsImage step={'2'} text={'SELECT PLAN'} currentStep={currentStep} />
        <StepsImage step={'3'} text={'ADD-ONS'} currentStep={currentStep} />
        <StepsImage step={'4'} text={'SUMMARY'} currentStep={currentStep} />
      </div>
        <MultiStepForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}

export default App
