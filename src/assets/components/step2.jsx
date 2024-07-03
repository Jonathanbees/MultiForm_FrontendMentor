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
    const plans = [ //array de planes
        { id: 'Arcade', name: 'Arcade', price: '$9/mo', icon: <img src={IconArcadeImage} alt="Arcade Plan" />},
        { id: 'Advanced', name: 'Advanced', price: '$12/mo', icon:<IconAdvance />},
        { id: 'Pro', name: 'Pro', price: '$15/mo', icon:<IconPro />},
    ];
    const selectPlan = (planId) => { //selecciona el plan
        setSelectedPlan(planId);
        updateFormData({ ...formData, selectedPlan: planId }); //actualiza el plan seleccionado en formData
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

    return (
        <div className="menu text-justify px-20 py-5 h-full items-center content-center">
            <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Select your plan</h1>
            <span className='text-gray-400 font-ubuntu'>you have the option of monthly or yearly billing</span>
            <div className='grid grid-cols-3 gap-4 my-9 h-2/5 font-ubuntu'>
                {plans.map((plan) => (
                    <div key={plan.id} className={`p-4 border-2 ${selectedPlan === plan.id ? 'border-Purplish-blue bg-gray-100' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-Purplish-blue`} 
                    onClick={() => selectPlan(plan.id)}>
                        <div className=' text-2xl mb-12'>{plan.icon}</div>
                        <h3 className=' font-bold '>{plan.name}</h3>
                        <p className='font-light text-sm text-gray-400'>{plan.price}</p>
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
            <div className="flex justify-between mt-4">
                <button onClick={goPrevious} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue'>Go back</button>
                <button onClick={goNext} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal'>Next Step</button>
            </div>
        </div>
    )
}