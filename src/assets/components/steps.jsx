export function StepsImage({ step, text, currentStep }) {
    step = parseInt(step)
    const stepstring = `STEP ${step}`
    if (currentStep === step) {
        return (

            <div className="content text-white flex mb-5 pointer-events-none">
                <div className="flex items-center justify-center mr-4">
                    <button className='rounded-full inline-block py-1 px-4 text-center leading-none bg-Light-blue h-10 border text-Marine-blue font-bold'>{step}</button>
                </div>
                <div>
                    <span className='text-gray-500 font-ubuntu'>{stepstring}</span>
                    <h1 className='text-base font-bold font-ubuntu'>{text}</h1>
                </div>
            </div>
        )
    } else{
        return (
            <div className="content text-white flex mb-5 pointer-events-none">
                <div className="flex items-center justify-center mr-4">
                    <button className='rounded-full inline-block py-1 px-4 text-center leading-none h-10 border font-medium'>{step}</button>
                </div>
                <div>
                    <span className='text-gray-500 font-ubuntu'>{stepstring}</span>
                    <h1 className='text-base font-bold font-ubuntu'>{text}</h1>
                </div>
            </div>
        )
    }
}