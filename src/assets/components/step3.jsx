import { useState, useEffect, useRef, useCallback } from "react";
import { CheckBoxItem } from "./checkBoxItem.jsx";
export function Step3({ goNext, goPrevious, formData, updateFormData }) {

    const items = [
        { id: 1, title: "Online service", description: "Access to multiplayer games", price: "+$1/mo" },
        { id: 2, title: "Larger storage", description: "Extra 1TB of cloud save", price: "+$2/mo" },
        { id: 3, title: "Customizable Profile", description: "Custom theme on your profile", price: "+$2/mo" },
    ];
    const [selectedAddons, setSelectedAddons] = useState(formData?.addons || []);
    //console.log(selectedAddons)
    const prevAddonsRef = useRef();

    useEffect(() => {
        if (prevAddonsRef.current) {
            // Hacer copias de los arreglos antes de ordenar para evitar modificar los originales
            const prevAddonsCopy = [...prevAddonsRef.current];
            const selectedAddonsCopy = [...selectedAddons];

            // Convertir a string después de ordenar las copias
            const prevAddonsString = JSON.stringify(prevAddonsCopy.sort());
            const currentAddonsString = JSON.stringify(selectedAddonsCopy.sort());

            if (prevAddonsString !== currentAddonsString) {
                updateFormData({ addons: selectedAddons });
            }
        }
        prevAddonsRef.current = selectedAddons;
    }, [selectedAddons, updateFormData]);

    const handleCheckboxChange = useCallback((itemId) => {
        setSelectedAddons((currentSelectedAddons) => {
            const itemIndex = currentSelectedAddons.indexOf(itemId);
            if (itemIndex === -1) {
                return [...currentSelectedAddons, itemId];
            } else {
                return currentSelectedAddons.filter((id) => id !== itemId);
            }
        });
    }, []);

    return (
        <div className="menu text-justify px-10 h-5/6 justify-between sm:px-0 sm:py-2">
            <div className="lg:p-8 sm:px-0 sm:py-8 bg-white border lg:border-0 sm:absolute sm:top-36 lg:top-0 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0 sm:rounded-xl lg:static lg:h-full">
                <div className="flex flex-col space-y-4 w-full sm:w-4/5 m-auto h-full">
                    <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Pick add-ons</h1>
                    <span className='text-gray-400 font-ubuntu'>Add-ons help enhance your gaming experience</span>
                    {items.map(item => (
                        <CheckBoxItem
                            key={item.id}
                            item={item}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedAddons={selectedAddons}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-end w-full sm:w-full fixed lg:static sm:bottom-0 sm:left-0 sm:right-0 sm:bg-white sm:p-4 lg:px-0 lg:items-end">
                    <button onClick={goPrevious} className='w-full sm:w-auto px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue sm:mr-2'>Go back</button>
                    <button onClick={goNext} className='w-full sm:w-auto px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal sm:ml-2'>Next Step</button>
                </div>
            </div>
        </div>
    );
}