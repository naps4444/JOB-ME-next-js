import React from 'react'
import Image from 'next/image'

const Stepper = () => {

    const steps = [
        {  image: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1721038222/Vector_wlwocz.png",
            text: "Create an account/Log In"
        },
        {  image: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1721038217/Vector_1_gfygej.png",
            text: "Complete your profile"
        },
        {  image: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1721038215/oui_ml-create-population-job_gcbar7.png",
            text: "Find best Jobs"
        },
        {  image: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1721038267/Group_bk7b6g.png",
            text: "Apply for Jobs"
        },

    ];
  return (
    <div className='w-11/12 container mx-auto pt-14'>
        <h2 className='text-center text-2xl font-semibold mb-8'>How It Works?</h2>
        <div className='flex items-center justify-between relative'>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className='flex flex-col items-center'>
                        <div className={`w-10 h-10 lg:w-24 lg:h-24 rounded-md flex items-center justify-center bg-cyan-100`}>
                            <Image src={step.image} alt={step.text} width={50} height={50} />
                        </div>
                    <div className='min-h-8'>
                        <p className='mt-2 text-xs font-bold text-center max-w-[80px] lg:max-w-[100px]'>{step.text}</p>
                    </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`flex-1 w-[75%] md:w-[85%] xl:w-[92%] h-0.5 absolute right-0 left-14 -z-20 -translate-y-4 bg-cyan-500`}></div>
                    )}

                </React.Fragment>
            ))}
        </div>        
    </div>
  );
}

export default Stepper