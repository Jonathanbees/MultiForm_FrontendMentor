export function CheckBoxItem({ item, handleCheckboxChange, selectedAddons }) {
    return (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center pl-1 space-x-4">
                <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    onChange={() => handleCheckboxChange(item.id)}
                    checked={selectedAddons.includes(item.id)}
                    className="w-4 h-4 accent-Purplish-blue"
                />
                <label htmlFor={`checkbox-${item.id}`} className="flex flex-col">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-xs text-gray-600">{item.description}</span>
                </label>
            </div>
            <div className="text-sm font-semibold">{item.price}</div>
        </div>
    );
}