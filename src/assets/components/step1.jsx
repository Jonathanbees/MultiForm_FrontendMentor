import { useState, useEffect } from 'react';

export function Step1({ goNext, formData, updateFormData }) {
    const [name, setName] = useState(formData.name || '');
    const [email, setEmail] = useState(formData.email || '');
    const [celphone, setCelphone] = useState(formData.celphone || '');
    useEffect(() => {
        updateFormData({ name, email, celphone });
    }, [name, email, celphone]);

    const validateForm = !name || !email || !celphone;
    return (
        <div className="menu text-justify lg:px-20 h-full lg:m-auto lg:content-center lg:block lg:items-start lg:w-full sm:content-center sm:m-auto sm:p-5">
            <div className="p-8 bg-white border lg:border-0 lg:static sm:absolute sm:top-24 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0">
                <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue sm:text-xl'>Personal info</h1>
                <span className='text-gray-400 font-ubuntu sm:text-sm'>Please provide your name, email address and phone number</span>
                <div className='form h-auto mt-4'>
                    <form action="">
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='font-ubuntu mb-2 text-Marine-blue sm:text-sm'>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border hover:border-Purplish-blue active:border-Purplish-blue focus:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue sm:text-sm' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='font-ubuntu mb-2 text-Marine-blue sm:text-sm'>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='peer border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue invalid:border-Strawberry-red invalid:focus:border-Strawberry-red invalid:hover:border-Strawberry-red sm:text-sm' />
                            <p className="invisible peer-invalid:visible text-Strawberry-red text-sm font-ubuntu sm:text-xs">
                                Please provide a valid email address.
                            </p>
                        </div>
                        <div className='flex flex-col mb-8'>
                            <label htmlFor="phone" className='font-ubuntu mb-2 text-Marine-blue sm:text-sm'>Phone</label>
                            <input onChange={(e) => setCelphone(e.target.value)} value={celphone} type="number" className='border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue sm:text-sm' />
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <button onClick={goNext} disabled={validateForm} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal sm:text-sm sm:px-3 sm:py-1'>Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    );
}