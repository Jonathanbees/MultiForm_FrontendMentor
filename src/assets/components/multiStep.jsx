import { useCallback, useEffect, useState } from 'react';
import { Step1 } from './step1.jsx';
import { Step2 } from './step2.jsx';
import { Step3 } from './step3.jsx';
import { Step4 } from './step4.jsx';

export function MultiStepForm({ currentStep, setCurrentStep }) {

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');

    return savedData ? JSON.parse(savedData) : {
      step1: '',
      step2: { selectedPlan: '', billingPeriod: 'Monthly' }, //inicializa los datos del formulario, selectedPlan es para el plan seleccionado y billingPeriod es para el periodo de facturación
      step3: { addons: [] },
      step4: ''
    };
  });
  // Dentro de MultiStepForm.jsx
  const resetForm = () => {
    // Establece formData a su estado inicial
    setFormData({ step1: '', step2: { selectedPlan: '', billingPeriod: 'Monthly' }, step3: { addons: [] }, step4: '' });
    // Elimina los datos de localStorage
    localStorage.removeItem('formData');
    localStorage.clear();
  };

  const goToNextStep = () => setCurrentStep(currentStep + 1);
  const goToPreviousStep = () => setCurrentStep(currentStep - 1);

  useEffect(() => {
    console.log('formData', formData) //closed by the addons, because it throws an empty object, so, the console.log executes indefinitely
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = useCallback((step, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: { ...prevFormData[step], ...data },
    }));
  }, []);

  return (
    <>
      {currentStep === 1 && <Step1 goNext={goToNextStep} formData={formData.step1} updateFormData={(data) => updateFormData('step1', data)} />}
      {currentStep === 2 && <Step2 goNext={goToNextStep} goPrevious={goToPreviousStep} formData={formData.step2} updateFormData={(data) => updateFormData('step2', data)} />}
      {currentStep === 3 && <Step3 goNext={goToNextStep} goPrevious={goToPreviousStep} formData={formData.step3} updateFormData={(data) => updateFormData('step3', data)} />}
      {currentStep === 4 && <Step4 goPrevious={goToPreviousStep} formData={formData} setCurrentStep={setCurrentStep} updateFormData={(data) => updateFormData('step4', data)} resetForm={resetForm}/>}
    </>
  );
}