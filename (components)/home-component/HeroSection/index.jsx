import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="relative w-full h-screen bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundSize: 'initial',
                backgroundImage: `linear-gradient(270deg, rgba(10, 10, 10, 0.65) 0%, rgba(255, 255, 255, 0) 100%), url('ecogenic-bg.jpg')`,
            }}
        >
            <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-4 capitalize">
                <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 lg:bottom-40 left-4 right-4 flex justify-center sm:justify-end w-full max-w-5xl mx-auto">
                    <div className="w-full max-w-4xl text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#CDDC94] leading-tight">
                            LEADING THE WAY IN <br /> HEATING INNOVATION
                        </h1>
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mt-4">
                            Ecogenica<sup>®</sup> Heat Pumps for a Sustainable Future.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
