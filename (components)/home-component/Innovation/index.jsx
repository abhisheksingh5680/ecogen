import React from 'react';

const Innovation = () => {
    return (
        <section className="px-4 py-18 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/airconditioner.png"
                        alt="Ecogenica Heat Pumps"
                        className="w-full max-w-md lg:max-w-full object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#57703C] mb-6">
                        INNOVATION MEETS TECHNOLOGY
                    </h3>
                    <p className="text-[#666] mb-4 font-medium">
                        At Ecogenica,we believe in redefining the way you experience warmth in your home. As a pioneering Australian heat pump manufacturer, we’re dedicated to pushing the boundaries of innovation, sustainability, and cost-efficiency at an affordable price.
                    </p>
                    <p className="text-[#666] mb-4">
                        <span className='font-normal'>
                            Employing the newest generation of natural refrigerants, R290 we ensure that all models within this monobloc range have superior energy efficiency and the system meets the highest global standards for a cleaner healthier world.
                        </span>
                    </p>
                    <button className="bg-[#CDDC94] text-black font-semibold text-base px-6 py-2 rounded shadow  transition">
                        VIEW PRODUCTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
