import { useState, useEffect } from 'react';
import IconArcadeImage from '../images/icon-arcade.jpg';
import IconAdvance from './iconAdvance.jsx';
import IconPro from './iconPro.jsx';


export function Step2({ goNext, goPrevious, formData, updateFormData }) {
    const [selectedPlan, setSelectedPlan] = useState(formData.selectedPlan);  //inicializa el plan seleccionado -> mensual
    console.log(selectedPlan)
    const [buttonPosition, setButtonPosition] = useState(formData.buttonPosition); //inicializa la posición del botón -> 'left'
    console.log(buttonPosition)

    //ambos estados anteriores sirven para el toogle del botón de facturación, el plan no se inicializa como estado porque se actualiza en el formulario directamente

    /* Inicio de la sección de planes */
    const plans = [
        { id: 'Arcade', name: 'Arcade', price: 9, icon: <img src={IconArcadeImage} alt="Arcade Plan" /> },
        { id: 'Advanced', name: 'Advanced', price: 12, icon: <IconAdvance /> },
        { id: 'Pro', name: 'Pro', price: 15, icon: <IconPro /> },
    ];
    const selectPlan = (planId) => { //selecciona el plan
        const selectedPlan = plans.find(plan => plan.id === planId);
        setSelectedPlan(planId);
        updateFormData({...formData.step2, selectedPlan: planId, price: selectedPlan.price }); //actualiza el plan seleccionado en formData
    };

    /* Fin de la sección de planes */

    /* Inicio de la sección de facturación */
    const toggleButtonPosition = () => {
        const newButtonPosition = buttonPosition === 'left' ? 'right' : 'left'; //cambia la posición del botón
        setButtonPosition(newButtonPosition); //actualiza la posición del botón
        // Actualiza el periodo de facturación en formData
        const billingPeriod = newButtonPosition === 'left' ? 'Monthly' : 'Yearly'; //manda el dato de facturación de acuerdo a la posición del botón al formulario
        updateFormData({ ...formData, billingPeriod: billingPeriod });
    };
    /* Fin de la sección de facturación */

    // Actualiza formData cuando selectedPlan o buttonPosition cambian
    useEffect(() => {
        updateFormData({ selectedPlan, buttonPosition });
    }, [selectedPlan, buttonPosition]);

    const buttondisabled = selectedPlan === '';

    return (
        <div className="menu text-justify lg:pl-10 md:p-2 h-full lg:m-auto lg:content-center lg:items-start lg:w-full sm:content-center sm:m-auto sm:p-5">
            <div className="p-8 bg-white border lg:border-0 lg:static sm:absolute sm:top-36 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0 sm:rounded-xl">
                <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Select your plan</h1>
                <span className='text-gray-400 font-ubuntu'>you have the option of monthly or yearly billing</span>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-4 my-9 lg:h-2/5 font-ubuntu'>
                    {plans.map((plan) => (
                        <div key={plan.id} className={`lg:p-4 sm:flex sm:flex-col lg:block sm:p-0 border-2 ${selectedPlan === plan.id ? 'border-Purplish-blue bg-gray-100' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-Purplish-blue`}
                            onClick={() => selectPlan(plan.id)}>
                            <div className='sm:grid lg:grid-cols-2 sm:grid-cols-[1fr_3fr] sm:items-center sm:gap-x-4 lg:block'>
                                <div className='text-2xl lg:mb-12 sm:m-5 lg:m-0 sm:justify-self-center sm:self-center lg:justify-self-start lg:self-start'>{plan.icon}</div>
                                <div>
                                    <h3 className='font-bold'>{plan.name}</h3>
                                    <p className='font-light text-sm text-gray-400'>{`$${plan.price}/mo`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center bg-Magnolia items-center content-center pt-3 rounded-xl font-ubuntu">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={toggleButtonPosition} checked={buttonPosition === 'right'} />
                        <span className={`${buttonPosition === 'left' ? 'text-Marine-blue' : 'dark:text-Cool-gray'} ml-3 text-sm font-medium `}>Monthly</span>
                        <div className={`relative w-11 h-6 bg-Marine-blue rounded-full ${buttonPosition === 'left' ? 'justify-start' : 'justify-end'} flex items-center ml-5 mr-2`}>
                            {/* Botón que se mueve */}
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                        </div>

                        <span className={`ml-3 text-sm font-medium ${buttonPosition === 'right' ? 'text-Marine-blue' : 'dark:text-Cool-gray'}`}>Yearly</span>
                    </label>
                </div>
                <div className="flex justify-between items-end w-full sm:w-full fixed lg:static sm:bottom-0 sm:left-0 sm:right-0 sm:bg-white sm:p-4 lg:px-0 lg:items-end">
                    <button onClick={goPrevious} className='w-full sm:w-auto px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue sm:mr-2'>Go back</button>
                    <button onClick={goNext} disabled={buttondisabled} className='w-full sm:w-auto px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal sm:ml-2'>Next Step</button>
                </div>
            </div>
        </div>
    );
}