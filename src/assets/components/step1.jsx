import { useState } from 'react';

export function Step1({goNext}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [celphone, setCelphone] = useState('');

    const validateForm = !name || !email || !celphone;
    return (
        <div className="menu text-justify px-20 pt-8 h-full">
            <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue'>Personal info</h1>
            <span className='text-gray-400 font-ubuntu'>Please provide your name, email address and phone number</span>
            <div className='form h-auto mt-4'>
                <form action="">
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='font-ubuntu mb-2 text-Marine-blue'>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border hover:border-Purplish-blue active:border-Purplish-blue focus:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-ubuntu mb-2 text-Marine-blue'>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='peer border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue invalid:border-Strawberry-red invalid:focus:border-Strawberry-red invalid:hover:border-Strawberry-red' />
                        <p className="invisible peer-invalid:visible text-Strawberry-red text-sm font-ubuntu">
                            Please provide a valid email address.
                        </p>
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label htmlFor="phone" className='font-ubuntu mb-2 text-Marine-blue'>Phone</label>
                        <input onChange={(e) => setCelphone(e.target.value)} value={celphone} type="number" className='border hover:border-Purplish-blue active:border-Purplish-blue rounded-lg p-2 text-lg text-Marine-blue' />
                    </div>
                </form>
                <div className="flex justify-end">
                    <button onClick={goNext} disabled={validateForm} className='px-4 py-2 bg-Marine-blue text-white rounded-lg font-ubuntu font-normal'>Next Step</button>
                </div>
            </div>
        </div>
    )
}