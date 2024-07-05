import { useState,useEffect, useRef} from "react";
export function Step3({ goNext, goPrevious, formData, updateFormData }) {

    const items = [
        { id: 1, title: "Online service", description: "Access to multiplayer games", price: "+$1/mo" },
        { id: 2, title: "Larger storage", description: "Extra 1TB of cloud save", price: "+$2/mo" },
        { id: 3, title: "Customizable Profile", description: "Custom theme on your profile", price: "+$2/mo" },
    ];
    const [selectedAddons, setSelectedAddons] = useState(formData?.addons || []);
    const prevAddonsRef = useRef(selectedAddons);

    useEffect(() => {
        const currentAddons = formData.addons || [];
        const prevAddonsString = JSON.stringify(prevAddonsRef.current.sort());
        const currentAddonsString = JSON.stringify(currentAddons.sort());

        if (prevAddonsString !== currentAddonsString) {
            updateFormData('step3', { addons: selectedAddons });
        }

        prevAddonsRef.current = selectedAddons;
    }, [selectedAddons, updateFormData, formData.addons]);

    const handleCheckboxChange = (itemId) => {
        console.log(itemId);
        setSelectedAddons((currentSelectedAddons) => {
            const itemIndex = currentSelectedAddons.indexOf(itemId);
            if (itemIndex === -1) {
                return [...currentSelectedAddons, itemId];
            } else {
                return currentSelectedAddons.filter((id) => id !== itemId);
            }
        });
    };

    return (
        <div className="menu text-justify px-10 h-4/5 justify-between sm:px-2 sm:py-2">
            <div className="p-8 bg-white border lg:border-0 sm:absolute sm:top-36 lg:top-0 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0 sm:rounded-xl lg:static lg:h-full">
                <div className="flex flex-col space-y-4 w-full sm:w-4/5 m-auto h-full">
                    <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Pick add-ons</h1>
                    <span className='text-gray-400 font-ubuntu'>Add-ons help enhance your gaming experience</span>
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center pl-1 space-x-4">
                                <input
                                    type="checkbox"
                                    id={`checkbox-${item.id}`}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    checked={selectedAddons.includes(item.id)} // Asegura que el checkbox refleje su estado correctamente
                                    className="w-4 h-4"
                                />
                                <label htmlFor={`checkbox-${item.id}`} className="flex flex-col">
                                    <span className="text-sm font-semibold">{item.title}</span>
                                    <span className="text-xs text-gray-600">{item.description}</span>
                                </label>
                            </div>
                            <div className="text-sm font-semibold">{item.price}</div>
                        </div>
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