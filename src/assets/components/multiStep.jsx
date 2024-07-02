import {Step1} from './step1.jsx';
import {Step2} from './step2.jsx';

export function MultiStepForm({currentStep, setCurrentStep}) {
  
    const goToNextStep = () => setCurrentStep(currentStep + 1);
    const goToPreviousStep = () => setCurrentStep(currentStep - 1);
  
    return (
      <>
        {currentStep === 1 && <Step1 goNext={goToNextStep} />}
        {currentStep === 2 && <Step2 goNext={goToNextStep} goPrevious={goToPreviousStep} />}
      </>
    );
  }