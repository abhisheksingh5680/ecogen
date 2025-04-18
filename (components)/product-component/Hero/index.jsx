import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center capitalize"
            style={{
                backgroundImage: "url('/productbg.png')",
            }}
        >
            <div className="absolute inset-0  bg-opacity-40"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-start px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#CDDC94] leading-tight">
                    ECOGENICA ® PRODUCTS
                </h1>
                <p className="text-white text-xl md:text-2xl font-medium mt-4">
                    For an efficient and environmentally friendly home micro-climate.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
