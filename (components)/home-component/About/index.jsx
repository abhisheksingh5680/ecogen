import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-18 px-12 py-24 lg:px-32 bg-white">
            <div className="w-full lg:w-1/3">
                <img
                    src="/abouteco.jpg"
                    alt="Ecogenica Interior"
                    className="w-full h-auto  "
                />
            </div>
            <div className="w-full  text-[#666] items-start flex flex-col justify-center gap-4 lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-medium text-[#57703C] ">
                    ABOUT ECOGENICA<sup className="text-sm align-top">®</sup>
                </h3>
                <p className="text-[#666]  font-medium">
                    Ecogenica is an Australian owned designer, wholesaler, and manufacturer of Heat Pumps. The Ecogenica Brand specialises in Heat Pump hot water upgrades and installations and is a major participant in numerous state and federal government energy savings schemes.
                </p>
                <p className='text-[#666] font-normal'>
                    The Ecogenica brand was launched with the sole focus on Heat Pump technology. We have a wealth of talent and experience in technology innovation, using sustainable and renewable energy to deliver hot water to homes and businesses across Australia.
                </p>
                <p className='text-[#666] font-normal'>
                    The Ecogenica Brand has been installed in over 200,000 homes & businesses since the launch of our first Heat Pumps in 2018. Ecogenica estimates that close to a million Australians experience hot water generated by our heat pumps every day!
                </p>
                <p className='text-[#666] font-normal'>
                    Our new U.K. models are A+++ rated and our EG-290FR (290lt residential unit) heat pump has the highest COP in the Australian market. It produces 5.7 KW of energy from 1KW of electricity consumed.
                </p>
                <p className='text-[#666] font-normal'>
                    Ecogenica also offers installation services for its customers. Ecogenica is committed to greener and healthier technology and aims to reduce costs and expenses for its customers, saving customers money every day off their power bill.
                </p>
            </div>
        </div>
    );
};

export default About;
