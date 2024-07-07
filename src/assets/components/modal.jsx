import IconThankYou from './iconThankYou.jsx';

export const Modal = ({ enviado }) => {
    if (enviado) {
        return (
            <div className="menu text-justify lg:pl-10 md:p-2 h-full lg:m-auto lg:content-center lg:items-start lg:w-full sm:content-center sm:m-auto sm:p-8">
                <div className="p-8 bg-white border lg:border-0 lg:static sm:absolute sm:top-36 sm:left-5 sm:right-5 sm:z-10 lg:z-0 lg:right-0 lg:left-0 sm:rounded-xl">
                    <div className="w-full sm:w-4/5 m-auto h-full flex flex-col justify-center items-center">
                        <div className="text-center"> <IconThankYou /> </div>
                        <h1 className='text-3xl font-bold font-ubuntu text-Marine-blue mb-5 text-center'>Thank you</h1>
                        <span className='text-gray-400 font-ubuntu text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</span>
                    </div>
                </div>
            </div>
        );
    }
}