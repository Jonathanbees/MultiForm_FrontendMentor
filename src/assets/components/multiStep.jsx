import React, { useEffect, useState } from 'react';
import {Step1} from './step1.jsx';
import {Step2} from './step2.jsx';

export function MultiStepForm({currentStep, setCurrentStep}) {

    const [formData, setFormData] = useState(() => {
      const savedData = localStorage.getItem('formData');
      
      return savedData ? JSON.parse(savedData) : { step1: '', 
        step2: { selectedPlan: '', billingPeriod: 'Monthly' }}; //inicializa los datos del formulario, selectedPlan es para el plan seleccionado y billingPeriod es para el periodo de facturación
    });
  
    const goToNextStep = () => setCurrentStep(currentStep + 1);
    const goToPreviousStep = () => setCurrentStep(currentStep - 1);

    useEffect(() => {
      console.log('formData', formData)
      localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const updateFormData = (step, data) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [step]: { ...prevFormData[step], ...data },
      }));
    };
  
    return (
      <>
        {currentStep === 1 && <Step1 goNext={goToNextStep} formData={formData.step1} updateFormData={(data) => updateFormData('step1', data)} />}
        {currentStep === 2 && <Step2 goNext={goToNextStep} goPrevious={goToPreviousStep} formData={formData.step2} updateFormData={(data) => updateFormData('step2', data)} />}
      </>
    );
  }