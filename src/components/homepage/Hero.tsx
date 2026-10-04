import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Hero = () => {
    return (
        <div className="bg-[#15171D] h-auto lg:h-[448px] container mx-auto mt-[48px] rounded-2xl">
            <div className="flex flex-col h-full items-center justify-center text-center lg:flex-row lg:items-stretch lg:text-left p-6 sm:p-8 lg:p-[56px]">

                <div className=''>
                    <p className='text-[#C2F800] text-xs mb-4'>Workout Library</p>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#FFFFFF]">
                        TRAIN WITH INTENT. LOG <br className="hidden lg:block" />
                        EVERY SET.
                    </h1>

                    <p className="py-6 text-[#9CA3AF] text-sm sm:text-base lg:text-[16px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into <br className="hidden lg:block" /> today's plan, and watch the week's work add up.
                    </p>

                    <a 
                    href='#library'
                    className="btn btn-primary bg-[#C2F800] text-black rounded-1xl text-xs">
                        BROWSE WORKOUTS
                    </a>
                </div>

                <div className='mt-8 lg:mt-0 ml-0 lg:ml-auto flex items-center justify-items-end'>
                    <Image
                        alt="Tailwind CSS hero component"
                        src={banner}
                        width={400}
                        height={336}
                        className="max-w-[350px] sm:max-w-[360px] lg:w-[400px] rounded-lg shadow-2xl object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;