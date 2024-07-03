export function Step3({ goNext, goPrevious, formData, updateFormData }) {
    // Ejemplo de ítems a mostrar
    const items = [
      { id: 1, title: "Item 1", description: "Descripción del Item 1", price: "$10" },
      { id: 2, title: "Item 2", description: "Descripción del Item 2", price: "$20" },
      { id: 3, title: "Item 3", description: "Descripción del Item 3", price: "$30" },
    ];
  
    // Función para manejar el cambio de los checkboxes
    const handleCheckboxChange = (itemId) => {
      // Aquí puedes actualizar el estado o manejar la selección
      console.log("Seleccionado el ítem:", itemId);
    };
  
    return (
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                onChange={() => handleCheckboxChange(item.id)}
                className="w-5 h-5"
              />
              <label htmlFor={`checkbox-${item.id}`} className="flex flex-col">
                <span className="text-sm font-semibold">{item.title}</span>
                <span className="text-xs text-gray-600">{item.description}</span>
              </label>
            </div>
            <div className="text-sm font-semibold">{item.price}</div>
          </div>
        ))}
            <div className="flex justify-between mt-4">
                <button onClick={goPrevious} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal hover:bg-white hover:text-Marine-blue'>Go back</button>
                <button onClick={goNext} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal'>Next Step</button>
            </div>
      </div>
    );
  }