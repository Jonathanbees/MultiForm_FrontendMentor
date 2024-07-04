// En steps.jsx
export function StepsImage({ stepData, currentStep }) {
    const step = parseInt(stepData.step);
    const stepstring = `STEP ${step}`;
    const isActive = currentStep === step;

    return (
        <div className="content text-white flex mb-5 pointer-events-none">
            <div className="flex items-center justify-center mr-4">
                <button className={`rounded-full inline-block py-1 px-4 text-center leading-none h-10 border ${isActive ? 'bg-Light-blue text-Marine-blue font-bold' : 'font-medium'}`}>{step}</button>
            </div>

            <div className="hidden lg:block">
                <span className='text-gray-500 font-ubuntu'>{stepstring}</span>
                <h1 className='text-base font-bold font-ubuntu'>{stepData.text}</h1>
            </div>
        </div>
    );
}