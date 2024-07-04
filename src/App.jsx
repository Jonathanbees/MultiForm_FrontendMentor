import './App.css'
import { useState } from 'react';
//import DesktopSidebar from './assets/images/bg-sidebar-desktop.jpg'
import { StepsImage } from './assets/components/steps.jsx'
import { MultiStepForm } from './assets/components/multiStep.jsx'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsData = [
    { step: '1', text: 'YOUR INFO' },
    { step: '2', text: 'SELECT PLAN' },
    { step: '3', text: 'ADD-ONS' },
    { step: '4', text: 'SUMMARY' },
  ]; 
  return (
    <div className='grid grid-cols-1 lg:w-3/5 sm:w-64 md:grid-cols-[1fr_3fr] lg:bg-white sm:bg-Magnolia w-3/5 lg:h-4/6 rounded-xl p-3 sm:p-0 sm:h-3/5 lg:static sm:relative'>
      <div className={`sm:bg-bottom md:bg-cover xl:bg-cover bg-[url('./assets/images/bg-sidebar-desktop.svg')] sm:h-32 lg:h-full lg:px-5 w-full lg:rounded-xl sm:bg-Cool-gray md:block sm:flex lg:py-10 sm:flex-row sm:flex-wrap sm:justify-center`}>
        {stepsData.map((stepData) => (
          <StepsImage key={stepData.step} stepData={stepData} currentStep={currentStep} />
        ))}
      </div>
      <MultiStepForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}

export default App
