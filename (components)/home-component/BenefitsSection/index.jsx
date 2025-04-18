import React from 'react';

const benefits = [
    {
        title: "TEMP OPERATING RANGE",
        description: "Operates in ambient temperature ranges of -7 to +40 degrees celsius.",
        icon: "/range.png",
    },
    {
        title: "AUTO DISINFECTION",
        description: "Periodically heating the water beyond its set temp to prevent the growth of bacteria and legionella.",
        icon: "/auto.png",
    },
    {
        title: "RELIABLE SUPPLY",
        description: "Hot water whenever you need it, night or day, hail, rain or shine.",
        icon: "/supply.png",
    },
    {
        title: "QUALITY DESIGN",
        description: "Featuring a Toshiba compressor and designed in Melbourne for years of trouble free and reliable hot water.",
        icon: "/quality.png",
    },
    {
        title: "LOW OPERATING NOISE",
        description: "Engineered to operate with low noise levels.",
        icon: "/noise.png",
    },
];

const BenefitsSection = () => {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <h4 className="text-lg md:text-xl font-semibold text-[#333] mb-12">
                EXPLORE THE BENEFITS OF ECOGENICA HOT WATER HEAT PUMPS:
            </h4>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center px-4">
                        <img src={benefit.icon} alt={benefit.title} className="h-14 mb-4" />
                        <h4 className="text-[#57703C] font-medium text-base md:text-lg mb-2 uppercase text-center">
                            {benefit.title}
                        </h4>
                        <p className="text-[#666]  font-medium text-center">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;
