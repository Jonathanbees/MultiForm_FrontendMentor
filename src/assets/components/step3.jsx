export function Step3({ goNext, goPrevious, formData, updateFormData }) {
    // Ejemplo de ítems a mostrar
    const items = [
        { id: 1, title: "Online service", description: "Access to multiplayer games", price: "+$1/mo" },
        { id: 2, title: "Larger storage", description: "Extra 1TB of cloud save", price: "+$2/mo" },
        { id: 3, title: "Customizable Profile", description: "Custom theme on your profile", price: "+$2/mo" },
    ];

    // Función para manejar el cambio de los checkboxes
    const handleCheckboxChange = (itemId) => {
        // Aquí puedes actualizar el estado o manejar la selección
        console.log("Seleccionado el ítem:", itemId);
    };

    return (
        <div className="menu text-justify px-10 py-5 h-full flex flex-col justify-between">
            <div className="flex flex-col space-y-4 w-4/5 m-auto">
                <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Pick add-ons</h1>
                <span className='text-gray-400 font-ubuntu'>Add-ons help enhance your gaming experience</span>
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center pl-1 space-x-4">
                            <input
                                type="checkbox"
                                id={`checkbox-${item.id}`}
                                onChange={() => handleCheckboxChange(item.id)}
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
            <div className="flex justify-between items-end w-4/5 m-auto sm:grid-cols-1">
                <button onClick={goPrevious} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue'>Go back</button>
                <button onClick={goNext} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal'>Next Step</button>
            </div>
        </div>
    );
}