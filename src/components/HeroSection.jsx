import React from 'react';
import heroBanner from '../assets/hero-student.png'
const HeroSection = () => {
    return (

        <div className=" flex w-11/12 mx-auto items-center mt-12 ">

            <div className=' '>
                <h1 className='font-bold'>
                    <span className='text-[#00BCFF] text-4xl'>English</span>
                    <span className='text-[#18181B] text-4xl'> is Easy</span>
                </h1>
                <p className="py-6 font-siliguri w-8/12">
                    আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে যাবে অন্য একটি Level এ
                </p>
                <form className='flex flex-col gap-4'>
                    
                    <input type="text" className="input" placeholder="Enter Your Name" />

                  
                    <input type="email" className="input" placeholder="Your Email" />
                    <button className="btn btn-primary font-poppins w-[200px]">Get Started</button>
                </form>

            </div>
            <img
                src={heroBanner}
                className=" w-[400px] h-[400px] "
            />
        </div>

    );
};

export default HeroSection;