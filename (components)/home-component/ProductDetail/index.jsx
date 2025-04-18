import React from 'react';

const ProductDetail = () => {
    return (
        <section className="px-4 py-12 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#57703C] ">
                        Introducing the Ecogen290
                    </h3>
                    <h4 className='text-[#333] text-lg mb-6 font-medium'>R290 DC Inverter Multi-Purpose Air Source Heat Pump.</h4>
                    <p className="text-[#666] mb-4 font-medium">
                        The Ecogenica R290 DC Inverter Multi-Purpose Air Source Heat Pump range has been designed from the ground up to meet the cold weather requirements of UK homes and small businesses. </p>
                    <p className="text-[#666] mb-6 font-medium">
                        Ecogenica’s R290 Heat Pump Water Heaters are one of the world’s most energy-efficient Heat Pump Water Heaters. Our new products draw upon Ecogenica’s extensive experience designing and manufacturing Heat Pump Water Heaters.   </p>
                    <button className="bg-[#CDDC94] text-[#101010] font-semibold px-6 py-2 rounded shadow transition">
                        PRODUCT DETAILS
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/airconditioner.png"
                        alt="Ecogenica Heat Pumps"
                        className="w-full max-w-md lg:max-w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
