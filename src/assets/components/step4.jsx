export function Step4({ goPrevious, formData, updateFormData }) {
    // Extraer billingPrice, selectedPlan, y datos de step3 de formData
    const { step2: { price, selectedPlan, billingPeriod }, step3: addons } = formData;
    console.log(price, selectedPlan, billingPeriod, addons);
    //console.log(typeof addons)
    const clearFormStepsFromLocalStorage = () => {
        localStorage.removeItem('step1');
        localStorage.removeItem('step2');
        localStorage.removeItem('step3');
        localStorage.removeItem('step4');
    };
    /* extraer la ultima posicion del objeto addons (ya que los otros objetos son pura mierda) */
    // Convertir addonsObject a un array
    const addonskeys = Object.keys(addons);
    const addonsfinally = addonskeys[addonskeys.length - 1];
    const addonsArray = addons[addonsfinally];
    //console.log(addonsfinally, addonsArray)
    //console.log(typeof addonsArray)
    //console.log(addonsArray);
    //console.log(typeof addonsArray);
    const addonsArrayValues = Object.values(addonsArray); //-> Array final con los valores de addons dado el objeto addons que entró
    console.log(addonsArrayValues)



    const addonDetails = {
        1: { title: "Online service", description: "Access to multiplayer games", price: 1 },
        2: { title: "Larger storage", description: "Extra 1TB of cloud save", price: 1 },
        3: { title: "Customizable Profile", description: "Custom theme on your profile", price: 2 },
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        // Aquí iría la lógica de envío del formulario
        // Por ejemplo, updateFormData(formData) o una llamada a API

        // Luego de enviar, limpiar localStorage
        clearFormStepsFromLocalStorage();

        // Opcionalmente, redirigir al usuario o mostrar un mensaje de éxito
    };
    //sumar valores de price con los addons que haya seleccionado el usuario:
    const total = addonsArrayValues.reduce((acc, addonId) => {
        const addon = addonDetails[addonId];
        return acc + addon.price;
    }, price);
    console.log(total)

    return (
        <div className="menu text-justify px-10 sm:h-full lg:h-5/6 justify-between sm:px-0 sm:py-2">
            <div className="lg:p-8 sm:px-0 sm:py-8 bg-white border lg:border-0 sm:absolute sm:top-36 lg:top-0 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0 sm:rounded-xl lg:static lg:h-full">
                <div className="w-full sm:w-4/5 m-auto h-full ">
                    <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue mb-5'>Finishing up</h1>
                    <span className='text-gray-400 font-ubuntu'>Double-check everything looks OK before confirming.</span>
                    <div className="flex justify-between p-4 bg-gray-100 rounded-t-md mt-6"> {/* Aplica redondeado solo en la parte superior */}
                        <div className="pl-1">
                            <h3 className="text-Marine-blue font-semibold font-ubuntu pointer-events-none">{selectedPlan} {`(${billingPeriod})`}</h3>
                            <a className="text-base cursor-pointer opacity-60 text-Purplish-blue hover:opacity-100 underline">Change</a>
                        </div>
                        <div className="text-base font-ubuntu font-semibold flex items-center justify-center text-Marine-blue">{`$${price}/mo`}</div>
                    </div>
                    <div className="bg-gray-100 rounded-b-md">
                        {addonsArrayValues.map((addonId) => {
                            const addon = addonDetails[addonId];
                            return (
                                <div key={addonId} className="p-2 rounded-sm">
                                    <div className="flex justify-between">
                                        <span className="font-normal text-sm pointer-events-none text-gray-400">{addon.title}</span>
                                        <span>{`$${addon.price}/mo`}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-none rounded-b-md">
                        <div className="p-3 rounded-sm">
                            <div className="flex justify-between">
                                <span className="font-normal text-sm pointer-events-none text-gray-400">Total {billingPeriod === 'Monthly' ? `(per month)`:`(per year)` }</span>
                                <span className="font-ubuntu text-Purplish-blue font-semibold">
                                    {billingPeriod === 'Monthly' ? `$${total}/mo` : `$${total}/yr`}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end w-full sm:w-full fixed lg:static sm:bottom-0 sm:left-0 sm:right-0 sm:bg-white sm:p-4 lg:px-0 lg:items-end">
                        <button onClick={goPrevious} className='w-full sm:w-auto px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue sm:mr-2'>Go back</button>
                        <button onClick={handleSubmit} className='w-full sm:w-auto px-4 py-2 bg-Purplish-blue hover:opacity-60 text-white rounded-lg font-ubuntu font-normal sm:ml-2'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}