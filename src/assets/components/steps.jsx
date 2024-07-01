export function Steps ({step, text}) {
    const stepstring = `STEP ${step}`
    return (
        
        <div className="content text-white flex mb-5">
          <div className="flex items-center justify-center mr-4">
            <button className='rounded-full inline-block py-1 px-4 text-center leading-none h-10 border'>{step}</button>
          </div>
          <div>
            <span className='text-gray-500'>{stepstring}</span>
            <h1 className='text-base font-bold font-sans'>{text}</h1>
          </div>
        </div>
    )
}