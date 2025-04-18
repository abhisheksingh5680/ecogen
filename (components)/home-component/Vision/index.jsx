import React from 'react';

const Vision = () => {
    return (
        <div className="relative w-full h-[300px] lg:h-[500px] overflow-hidden py-20">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/vision.gif"
                alt="Vision Background"
            />
            <div className="absolute inset-0  bg-opacity-60 z-10" />
            <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
                <h3 className="text-[#CDDC94] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-6xl leading-snug">
                    Our vision is to create a greener and cleaner world using heat pump technology
                    to deliver reliable, efficient, and affordable hot water that serves to minimise
                    carbon footprint and maximise social impact. We aspire to be the global leader
                    in Heat Pump technology.
                </h3>
            </div>
        </div>
    );
};

export default Vision;
